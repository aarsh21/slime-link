<script lang="ts">
	import ThemeSelect from '$lib/components/Theme-select.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>@{data.username} Links !</title>
	<meta name="description" content={data.bio} />
</svelte:head>
<ThemeSelect />
<main class="prose text-center mx-auto mt-8">
	<h1 class="text-8xl font-pokemon tracking-[0.4rem] mb-5 cursor-pointer text-primary">
		@{data.username} <span>{'<3'}</span>
	</h1>

	<img src={data.photoURL ?? '/user.png'} alt="photoURL" width="256" class="mx-auto" />

	<p class="text-xl my-8 text-secondary">{data.bio ?? 'no bio yet...'}</p>
	<ul class="list-none">
		{#each data.links as item}
			{@debug item}
		{/each}
	</ul>
</main>
