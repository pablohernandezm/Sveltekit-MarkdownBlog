import type { LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = async ({ url }: LoadEvent) => {
	return {
		url: url.pathname,
	};
};
