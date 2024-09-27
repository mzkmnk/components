import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, ObservedValueUnionFromArray, map, of, timer } from 'rxjs';

@Component({
	selector: 'app-message',
	standalone: true,
	imports: [],
	templateUrl: './message.component.html',
	styleUrl: './message.component.css',
})
export class MessageComponent {
	messagesItem: {
		messageStart: {
			text: string;
			icon: string;
			command: () => Observable<boolean>;
		};
		messageEnd: {
			text: string;
			icon: string;
		};
	} = {
		messageStart: {
			text: 'Wating....',
			icon: 'pi pi-spin pi-spinner',
			command: (): Observable<boolean> => {
				return timer(4000).pipe(map(() => true));
			},
		},
		messageEnd: {
			text: 'Complted',
			icon: 'pi pi-check',
		},
	};

	isOk = toSignal(
		this.messagesItem.messageStart.command().pipe(
			map((value) => {
				return value;
			}),
		),
		{
			initialValue: false,
		},
	);
}
