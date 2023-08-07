<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

{#key $page.url}
	<div in:fly={{ x: '-100%', duration: 250 }}>
		<slot />
	</div>
{/key}
