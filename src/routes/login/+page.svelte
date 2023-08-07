<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { signInWithGoogle } from '$lib/signIn';
	import Icon from '@iconify/svelte';
	import { signOut } from 'firebase/auth';
</script>

<h1 class="text-2xl font-pokemon tracking-[0.4rem] mb-4">Login</h1>

{#if $user}
	<h2 class="card-title">Welcome , {$user.displayName}</h2>
	<p class="text-center text-success">you are logged in</p>
	<button class="btn" on:click={() => signOut(auth)}>Sign out</button>
{:else}
	<button class="btn rounded-2xl hover:bg-white/10" on:click={signInWithGoogle}>
		<Icon icon="uim:google" width="35" /> Sign in With google
	</button>
{/if}
