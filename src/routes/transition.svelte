<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url = '';
</script>

{#key url}
	<div class="transition" transition:fade={{ duration: 250 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
