<script>
	import ThemeSelect from '$lib/components/Theme-select.svelte';
	import { userData } from '$lib/firebase';
</script>

<svelte:head>
	<title>Slime Link - a place for links</title>
	<meta name="description" content="Demo project for the Full SvelteKit Course by Fireship" />
</svelte:head>

<main class="flex w-full min-h-screen">
	<div class="hero bg-base-200">
		<div class="hero-content text-center">
			<div class="w-full">
				<ThemeSelect />
				<h1 class="text-7xl font-bold mt-5">Slime Link</h1>
				<p class="py-6 text-2xl">One simple link to share your entire developer portfolio</p>
				{#if $userData?.username}
					<a href="/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a>
					<a href="/login" class="btn btn-secondary">Log Out</a>
				{:else}
					<a href="/login" class="btn btn-primary">Get Started</a>
					<a href="/Aarsh" class="btn btn-secondary">Example Profile</a>
				{/if}
			</div>
		</div>
	</div>
</main>
