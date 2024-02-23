/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				bug: '#729f3f',
				dark: '#707070',
				dragon: '#53a4cf',
				electric: '#eed535',
				fairy: '#fdb9e9',
				fighting: '#d56723',
				fire: '#fd7d24',
				flying: '#3dc7ef',
				ghost: '#7b62a3',
				grass: '#9bcc50',
				ground: '#f7de3f',
				ice: '#51c4e7',
				normal: '#a4acaf',
				poison: '#b97fc9',
				psychic: '#f366b9',
				rock: '#a38c21',
				steel: '#9eb7b8',
				water: '#4592c4',
			},
			animation: {
				pulsing: 'pulsing 1s ease-in-out both'
			},
			keyframes: {
				pulsing: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.02)' },
					'100%': { transform: 'scale(1)' }
				}
			}
		},
	},
	plugins: [],
	safelist: [
		{
			pattern: /bg-(bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|grass|ground|ice|normal|poison|psychic|rock|steel|water)/,
			variants: ['hover']
		},
	]
}
