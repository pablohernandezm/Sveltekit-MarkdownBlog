import { dev } from '$app/environment';

export const title = 'Shakespeare';
export const description = 'Sveltekit blog for poets';
export const url = dev ? 'http://localhost:5173' : 'http://skaespeare.dev';

type Route = { readonly name: string; readonly url: string };
export const routes: Route[] = [
	{ name: 'home', url: '/' },
	{ name: 'about', url: '/about' },
	{ name: 'contact', url: '/contact' },
];
