/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: {
					light: 'hsl(var(--color-background-light) / <alpha-value>)',
					dark: 'hsl(var(--color-background-dark) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
					light: 'hsl(var(--color-accent-light) / <alpha-value>)'
				}
			}
		}
	},
	plugins: [],
}
