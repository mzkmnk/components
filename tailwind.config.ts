import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
			  },
      animation:{
        'x-shape-animation':'x-shape-keyframe 1.5s'
      },
      keyframes: {
        'x-shape-keyframe': {
					'0%': {
						transform: 'translate(0px, 2px)',
					},
					'5%': {
						transform: 'translate(0px, -2px)',
					},
					'10%': {
						transform: 'translate(0px, 2px)',
					},
					'15%': {
						transform: 'translate(0px, -2px)',
					},
					'20%': {
						transform: 'translate(0px, 2px)',
					},
					'25%': {
						transform: 'translate(0px, -2px)',
					},
					'30%': {
						transform: 'translate(0px, 0px)',
					},
				},
      },
		},
	},
	plugins: [
		require('tailwindcss-primeui'),
		plugin(function({ addBase , theme  }) {
			addBase({
			  h1 : { fontSize: theme('fontSize.3xl') },
			  h2 : { fontSize: theme('fontSize.2xl') },
			  h3 : { fontSize: theme('fontSize.xl') },
			  h4 : { fontSize: theme('fontSize.lg') },
			})
		  })
	],
};
