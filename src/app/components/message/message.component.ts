import { Component, input } from '@angular/core';
import { TMessageItems } from './message.type';
@Component({
	selector: 'app-message',
	standalone: true,
	imports: [],
	templateUrl: './message.component.html',
	styleUrl: './message.component.css',
})
export class MessageComponent {
	messagesItem = input.required<TMessageItems>();
}
