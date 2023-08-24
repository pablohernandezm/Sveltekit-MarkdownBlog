<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="blog-layout">
	<article>
		<header>
			<h1>{data.meta.title}</h1>
			<p>Published at <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time></p>

			<div>
				{#each data.meta.categories as tag}
					<a href=" ">&num;{tag}</a>
				{/each}
			</div>
		</header>

		<div class="content">
			<svelte:component this={data.content} />
		</div>
	</article>
</div>

<style>
	.blog-layout {
		padding: 2rem;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	header {
		padding: 1rem;
		border-radius: 10px;

		& h1 {
			margin: 0;
			font-size: 3rem;
			text-wrap: balance;
		}

		& p {
			font-style: italic;
			color: var(--text2-color);
			font-size: small;
			margin-inline: 1ch;
		}

		& a {
			color: var(--brand-color);
			font-weight: bold;
			padding: 0.5rem;

			border-radius: 10px;
			text-decoration: none;
		}
	}

	.content {
		position: relative;
		padding-inline: 2ch;
		container-type: inline-size;
	}

	.content::before {
		content: '';
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		border-left: dashed 2px var(--surface1-color);
	}
</style>
