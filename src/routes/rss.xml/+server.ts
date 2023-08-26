import * as config from '$lib/config';
import type { Post } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	const headers = { 'content-type': 'application/rss+xml' };

	const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
        <channel>
            <title>${config.title}</title>
            <link>${config.url}</link>
            <description>${config.description}</description>
            <atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
            type="application/rss+xml"/>
            ${posts
							.map(
								(post) => `
                <item>
                    <title>${post.title}</title>
                    <link>${config.url}/${post.slug}</link>
                    <description>${post.description}</description>
                    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                </item>
            `,
							)
							.join('')}
        </channel>
    </rss>`.trim();

	return new Response(xml, { headers });
};
