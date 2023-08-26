<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<img {src} {alt} loading="lazy" />

<style>
	img {
		width: 100%;
		max-width: 600px;
		margin: 1ch;
		transition: 0.5s;

		@container (min-width: 600px) {
			width: 70%;
		}
	}
</style>
