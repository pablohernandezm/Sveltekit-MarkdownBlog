<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
	div {
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
