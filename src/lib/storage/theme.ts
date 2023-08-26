import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const userTheme = browser && localStorage.getItem('color-scheme');
export const theme = writable(userTheme ?? 'dark');

export function toggleTheme() {
	console.log(`Initial: ${theme}`);
	theme.update((currentTheme) => {
		const newTheme: Theme = currentTheme == 'dark' ? 'light' : 'dark';

		localStorage.setItem('color-scheme', newTheme);
		document.documentElement.setAttribute('color-scheme', newTheme);

		console.log(`changed to: ${newTheme}`);

		return newTheme;
	});
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}
