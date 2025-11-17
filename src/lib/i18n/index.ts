import { derived } from 'svelte/store';
import { language } from '$lib/stores/language';
import { translations } from './translations';

export const t = derived(language, $language => translations[$language]);
