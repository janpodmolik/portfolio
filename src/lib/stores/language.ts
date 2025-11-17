import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'cs' | 'en';

// Get initial language from localStorage or browser
const getInitialLanguage = (): Language => {
	if (browser) {
		const stored = localStorage.getItem('language') as Language;
		if (stored === 'cs' || stored === 'en') return stored;
		
		// Detect from browser
		const browserLang = navigator.language.toLowerCase();
		return browserLang.startsWith('cs') ? 'cs' : 'en';
	}
	return 'cs';
};

export const language = writable<Language>(getInitialLanguage());

// Save to localStorage when changed
if (browser) {
	language.subscribe(value => {
		localStorage.setItem('language', value);
	});
}
