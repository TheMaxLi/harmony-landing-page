import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sf-pro': ['SF Pro', 'sans-serif'], // Fallback to sans-serif
				grotesque: ['ES Rebond', 'sans-serif']
			}
		}
	},

	plugins: [typography]
} satisfies Config;
