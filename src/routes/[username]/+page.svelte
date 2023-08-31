<script lang="ts">
	import ThemeSelect from '$lib/components/Theme-select.svelte';
	import UserLink from '$lib/components/UserLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>@{data.username} Links</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<main class="text-center mx-auto mt-8">
	<div class="mb-3">
		<ThemeSelect />
	</div>

	<h1 class="text-7xl text-primary mb-5">
		@{data.username}
	</h1>
	<img src={data.photoURL ?? '/user.png'} alt="photoURL" width="256" class="mx-auto rounded-lg" />

	<p class="text-xl mt-6 mb-4 p-2 rounded-lg">{data.bio ?? 'no bio yet...'}</p>

	<ul class="list-none flex flex-col align-center mb-8 sm:flex-row">
		{#each data.links as item}
			<li class="my-3 mx-3 transform translate-y-2 hover:-translate-y-1 duration-500 ease-in-out">
				<UserLink {...item} />
			</li>
		{/each}
	</ul>
</main>
