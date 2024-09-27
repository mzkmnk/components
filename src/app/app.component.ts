import { Component, type OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Aura } from 'primeng/themes/aura';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ButtonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	config = inject(PrimeNGConfig);

	constructor() {
		this.config.theme.set({ preset: Aura });
	}

	ngOnInit() {
		this.config.ripple.set(true);
	}
}
