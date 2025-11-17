/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Primary - modrošedá
				primary: {
					DEFAULT: '#5D688A',
					light: '#7B85A3',
					dark: '#4A5470',
					50: '#F5F6F8',
					100: '#E8EAF0',
				},
				// Accent - růžová
				accent: {
					DEFAULT: '#F7A5A5',
					light: '#FBC4C4',
					dark: '#F48686',
				},
				// Secondary - broskvová
				secondary: {
					DEFAULT: '#FFDBB6',
					light: '#FFE8D1',
					dark: '#FFCE9B',
				},
				// Background - světle růžová
				background: {
					DEFAULT: '#FFF2EF',
					light: '#FFFAF8',
				},
				// Text colors
				text: {
					primary: '#2D3748',
					secondary: '#5D688A',
					muted: '#A0AEC0',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
