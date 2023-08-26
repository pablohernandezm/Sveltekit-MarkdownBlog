<script lang="ts">
	import 'modern-normalize';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Transition from './transition.svelte';
	import '../app.css';
	export let data;
</script>

<div class="layout">
	<Header />
	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>
	<Footer />
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		min-height: 100lvh;
		background-color: var(--background-color);
		color: var(--text1-color);
	}

	:global(a, a:link, a:visited) {
		color: var(--brand-color);
	}

	main {
		min-width: 100svw;
		max-width: 100lvw;
	}
</style>
