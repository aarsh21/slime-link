/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: 'Montserrat',
				DMSans: 'DMSans'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: true
	}
};
