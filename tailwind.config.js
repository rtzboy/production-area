/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Roboto', 'serif']
		},
		extend: {
			animation: {
				shake: 'shake 2s ease-in-out infinite'
			},
			keyframes: {
				shake: {
					'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
					'20%, 80%': { transform: 'translate3d(1px, 0, 0)' },
					'30%, 50%, 70%': { transform: 'translate3d(-1px, 0, 0)' },
					'40%, 60%': { transform: 'translate3d(1px, 0, 0)' }
				}
			}
		}
	},
	plugins: []
};
