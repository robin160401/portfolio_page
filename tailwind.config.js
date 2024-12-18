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
		keyframes: {
			
		}
	  },
	},
	plugins: [],
  }
  