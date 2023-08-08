<script lang="ts">
	import { user } from '$lib/firebase';
</script>

{#if $user}
	<slot />
{:else}
	<p class="text-error my-10">
		you must be logged in to view this page.
		<br />
	</p>
	<a class="btn btn-primary" href="/login"> Sign In </a>
{/if}
