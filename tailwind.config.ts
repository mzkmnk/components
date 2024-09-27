import { animation, keyframes } from '@angular/animations';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}'],
	theme: {
		extend: {
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
	plugins: [require('tailwindcss-primeui')],
};
