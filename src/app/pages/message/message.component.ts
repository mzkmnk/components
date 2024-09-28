import { Component, Signal, computed } from '@angular/core';
import { MessageComponent as Mcomponent } from '../../components/message/message.component';
import { TMessageItems } from '../../components/message/message.type';
import { Highlight } from 'ngx-highlightjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';


@Component({
  selector: 'app-page-message',
  standalone: true,
  imports: [Highlight,Mcomponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  isEnd = toSignal(
		timer(5000).pipe(
			map(() => true)
		),
		{initialValue:false}
	);

	messagesItem:Signal<TMessageItems> = computed(() => {
		return {
			isEnd:this.isEnd(),
			messageStart: {
				text: 'Wating...',
				icon: 'pi pi-spin pi-spinner',
			},
			messageEnd: {
				text: 'Complted',
				icon: 'pi pi-check',
			},
		}
	})
	code = `
	<div [class]="messagesItem().isEnd ? 'animate-[x-shape-keyframe_1.5s]':''" class="flex flex-row items-center gap-4 border-[1px] rounded-xl px-5 py-2 bg-green-200 border-green-400">
    	<i class="text-green-700 text-xl" [class]="messagesItem().isEnd ? messagesItem().messageEnd.icon : messagesItem().messageStart.icon"></i>
    	<p class="font-semibold text-green-600">{{ messagesItem().isEnd ? messagesItem().messageEnd.text : messagesItem().messageStart.text }}</p>
	</div>
	`
}
