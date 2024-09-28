import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHighlightOptions } from 'ngx-highlightjs';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideStore(),
		provideEffects(),
		provideAnimationsAsync(),
		provideHighlightOptions({
			fullLibraryLoader: () => import('highlight.js')
		})
	],
};
