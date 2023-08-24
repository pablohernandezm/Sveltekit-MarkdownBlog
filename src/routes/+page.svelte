<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="content">
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<h2><a href={post.slug} class="title">{post.title}</a></h2>
				<p class="date">({formatDate(post.date)})</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.content {
		padding-inline: 1rem;
		position: relative;
	}

	.posts {
		display: grid;
		padding: 1rem;
		gap: 2rem;

		& .post {
			list-style: none;
			padding: 1rem;
			background-color: var(--surface2-color);
			border-radius: 10px;
		}
	}

	h2 {
		margin-block: 0.3rem;
	}
	.title {
		font-size: larger;
		margin: 0;
	}

	.date {
		font-size: small;
		color: var(--text2-color);
		font-style: italic;
		margin: 0;
	}
</style>
