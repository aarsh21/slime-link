<script lang="ts">
	import { userData } from '$lib/firebase';
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { db, user } from '$lib/firebase';
	import { doc, getDoc, writeBatch } from 'firebase/firestore';

	const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
	$: isValid = username?.length > 2 && username.length < 16 && re.test(username);
	$: isTouched = username.length > 0;
	$: isTaken = isValid && !isAvailable && !loading;

	let username = '';
	let loading = false;
	let isAvailable = false;

	let debounceTimer: NodeJS.Timeout;

	async function confirmUsername() {
		console.log('confirming username', username);

		const batch = writeBatch(db);
		batch.set(doc(db, 'usernames', username), { uid: $user?.uid });
		batch.set(doc(db, 'users', $user!.uid), {
			username,
			photoURL: $user?.photoURL ?? null,
			published: true,
			bio: 'I am the slime',
			links: [
				{
					title: 'Test Link',
					url: 'https://mail.google.com',
					icon: 'custom'
				}
			]
		});

		await batch.commit();

		username = '';
		isAvailable = false;
	}
	async function checkAvailibilty() {
		isAvailable = false;
		clearTimeout(debounceTimer);

		loading = true;

		debounceTimer = setTimeout(async () => {
			console.log('checking availabilty of', username);

			const ref = doc(db, 'usernames', username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		}, 500);
	}
</script>

<AuthCheck>
	<h2 class="text-2xl font-pokemon tracking-[0.4rem] mb-4 cursor-pointer">Username</h2>

	{#if $userData?.username}
		<p class=" p-2">
			your username is <span class="text-l bg-success">@{$userData.username}</span>
		</p>

		<p>usernames cannot be changed !</p>
		<button class="btn btn-neutral">
			<a href="/login/photo">Upload profile Image</a>
		</button>
	{:else}
		<h2 class="card-title mb-2">Enter a new Username</h2>
		<form class="w-2/5 text-black" on:submit|preventDefault={confirmUsername}>
			<input
				type="text"
				placeholder="Username"
				class="input w-full"
				bind:value={username}
				on:input={checkAvailibilty}
				class:input-error={!isValid && isTouched}
				class:input-warning={isTaken}
				class:input-success={isAvailable && isValid && !loading}
			/>
			<div class="my-4 min-h-16 w-full">
				{#if loading}
					<p class="text-secondary">Checking availability of @{username}...</p>
				{/if}

				{#if !isValid && isTouched}
					<p class="text-error text-sm">must be 3-16 characters long, alphanumeric only</p>
				{/if}

				{#if isValid && !isAvailable && !loading}
					<p class="text-warning text-sm">
						@{username} is not available
					</p>
				{/if}
				{#if isAvailable}
					<button class="btn btn-success">Confirm username @{username} </button>
				{/if}
			</div>
		</form>
	{/if}
</AuthCheck>
