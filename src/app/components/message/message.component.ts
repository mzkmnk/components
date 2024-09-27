import { Component, computed, effect, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, ObservedValueUnionFromArray, map, of, single, timer } from 'rxjs';
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
