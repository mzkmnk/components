import { Component, type OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { MessageComponent } from './components/message/message.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MessageComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	/* primeNG -- start config -- */
	config = inject(PrimeNGConfig);

	constructor() {
		this.config.theme.set({ preset: Aura });
	}

	ngOnInit() {
		this.config.ripple.set(true);
	}
	/* primeNG -- end config -- */
}
