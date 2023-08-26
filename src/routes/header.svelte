<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={config.title} />
	<meta property="og:site_name" content={config.title} />
</svelte:head>

<header>
	<nav>
		<a href="/" class="title">
			<b>{config.title}</b>
		</a>

		<ul>
			{#each config.routes as route}
				<li>
					<a href={route.url}>{route.name}</a>
				</li>
			{/each}

			<li>
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
		</ul>

		<Toggle />
	</nav>
</header>

<style>
	header {
		container-type: inline-size;
	}

	nav {
		display: grid;
		grid-template-columns: [title]max-content [links]1fr [theme-switcher]max-content;
		justify-content: space-around;
		justify-items: center;
		padding-block: 2rem;
		padding-inline: 3ch;
		align-items: center;
		text-transform: uppercase;
		column-gap: 5ch;

		@container (max-width: 700px) {
			grid-template-areas: 'title theme-switcher' 'links links';
			grid-template-columns: 1fr 1fr;
		}
	}

	ul {
		list-style: none;
		display: flex;
		padding: 0;
		grid-area: links;
		gap: 0.5ch;
		width: 100%;
		justify-content: center;

		& li {
			margin-inline: 1ch;
			letter-spacing: 0.5ch;
		}

		@container (min-width:700px) {
			justify-content: end;
		}
	}

	a {
		text-decoration: none;
		position: relative;

		&:is(:link, :visited) {
			color: var(--text1-color);
		}
	}

	a:not(.title) {
		transition: 1s;

		&:focus {
			transition: none;
			outline-offset: 1ch;
		}

		&::after {
			content: '';
			position: absolute;
			background-color: var(--brand-color);
			width: 0;
			height: 1px;
			left: 50%;
			top: 100%;
			transition: 0.2s;
		}

		&:hover::after {
			width: 100%;
			left: 0;
		}

		@container (max-width: 390px) {
			font-size: small;
		}
	}

	.title {
		--font-size: 1.5rem;
		font-size: var(--font-size);
		grid-area: title;

		&:focus:not(:active) {
			outline: solid 2px var(--brand-color);
			outline-offset: 1rem;
		}

		&::after {
			content: '';
			position: absolute;
			background-color: var(--brand-color);
			width: 0.8ch;
			height: 0.8ch;
			opacity: 1;
			right: -0.8ch;
			top: calc(2px + var(--font-size));
			transition: 0.5s;
		}

		&:hover::after {
			height: 2px;
			width: 50%;
		}
	}
</style>
