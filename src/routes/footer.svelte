<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<small>{config.title} &copy {new Date().getFullYear()}</small>
</footer>

<style>
	footer {
		text-align: right;
		padding-inline: 2rem;
		padding-block: 1rem;
	}
</style>
