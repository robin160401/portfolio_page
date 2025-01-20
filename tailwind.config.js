/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		backgroundImage: {
		  'background-wall': "url('/img/background-wall.jpg')",
		},
		fontFamily: {
		  'it-eb': ['it-eb', 'sans-serif'],
		},
		animation: {
			'jump-in': 'jumpIn 0.4s ease forwards',
			'fadeout-scroll': 'heroFadeOut '
		},
		keyframes: {
			jumpIn: {
				'0%': {
					transform: 'translateY(0)',
				},
				'50%': {
					transform: 'translateY(30px)',
					opacity: '0'
				},
				'51%':
				{
					transform: 'translateY(-30px)',
				},
				'100%': {
					transform: 'translateY(0)',
					opacity: '1'
				}
			},
			heroFadeOut: {
				'100%': {
					opacity: '0'
				}
			}
		},
	  },
	},
	plugins: [],
  }
  