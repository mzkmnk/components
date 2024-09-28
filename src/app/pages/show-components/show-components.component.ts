import { Component, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';
import { TMessageItems } from '../../components/message/message.type';
import { MessageComponent } from "../../components/message/message.component";
import { CardModule } from 'primeng/card';
import { WorkflowBuilderComponent } from "../../components/workflow-builder/workflow-builder.component";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-show-components',
  standalone: true,
  imports: [MessageComponent, CardModule, WorkflowBuilderComponent,TagModule],
  templateUrl: './show-components.component.html',
  styleUrl: './show-components.component.css'
})
export class ShowComponentsComponent {
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
}
