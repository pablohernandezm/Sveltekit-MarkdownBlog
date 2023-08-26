<script>
	import { toggleTheme } from '$lib/storage/theme';
</script>

<button on:click={toggleTheme}> Theme </button>

<style>
	button {
		background-color: transparent;
		border: 2px solid var(--brand-color);
		padding-inline: 1rem;
		padding-block: 0.5rem;
		cursor: pointer;
		width: 10ch;
		outline: none;
		position: relative;
		grid-area: theme-switcher;
		user-select: none;
		color: var(--text1-color);

		&:is(:hover, :focus) {
			letter-spacing: 0.5px;
			outline-style: dashed;
			outline-offset: 0.5ch;
			outline-color: var(--brand-color);
		}

		@media (prefers-color-scheme: light) {
			border-color: var(--darkest-color);
			color: var(--darkest-color);
		}
	}
</style>
