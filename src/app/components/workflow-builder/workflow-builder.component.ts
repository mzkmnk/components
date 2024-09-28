import { Component, ElementRef, Signal, WritableSignal, computed, effect, signal, untracked, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, map, throttleTime } from 'rxjs';

export type TWorkflowItems = {
  title:string,
  tags:string,
  description?:string,
  position:{
    x:number,
    y:number,
  },
}

@Component({
  selector: 'app-workflow-builder',
  standalone: true,
  imports: [],
  templateUrl: './workflow-builder.component.html',
  styleUrl: './workflow-builder.component.css'
})
export class WorkflowBuilderComponent {

  /** 親要素の位置を取得する */
  $workspaceEl = viewChild<ElementRef>('workspace');

  constructor(){
    effect(() => {
      console.log(this.$workspaceEl()?.nativeElement.getBoundingClientRect());
    })
  }

  /** drag情報 */
  dragInfo: {isDragging:boolean,index:number|null} = {
      isDragging:false,
      index:null
    };

  /** ユーザが設定したアイテム */
  $workflowItems:WritableSignal<TWorkflowItems[]> = signal<TWorkflowItems[]>([
    {
      title:'MessageComponent',
      tags:'tailwind',
      position:{
        x:200,
        y:100
      }
    },
    {
      title:'WorkflowComponent',
      tags:'tailwind',
      position:{
        x:200,
        y:200
      }
    },
    {
      title:'TestComponent',
      tags:'tailwind',
      position:{
        x:200,
        y:300
      }
    }
  ]);

  /** mouseupを検知する */
  $onMouseUpWorkflowItem = toSignal(
    fromEvent<MouseEvent>(window,'mouseup')
    .pipe(
      debounceTime(10),
      map(() => {
        this.dragInfo = {
          isDragging:false,
          index:null
        }
      })
    )
  )

  $onMouseMoveWorkflowItem = toSignal(
    fromEvent<MouseEvent>(window, 'mousemove')
    .pipe(
      map((event: MouseEvent) => {
        this.onMouseMoveWorkflowItem(event);
      })
    )
  );

  /** itemの左上とドラッグ開始地点の差 */
  dragOffset = {
    x:0,
    y:0,
  }

  /**
   * 親要素の位置から要素の相対的ない位置を取得する
   * @param x アイテムのX座標
   * @param y アイテムのY座標
   * @returns 相対的な位置({x:number,y:number})
   */
  getRelativePosition = (x:number,y:number):{
    x:number,
    y:number,
  } => {
    const {left,top} = this.$workspaceEl()?.nativeElement.getBoundingClientRect();
    return {
      x:x-left,
      y:y-top
    }
  }

  /**
   * アイテムのドラッグ開始時に発火するイベント
   * @param event MouseEvent
   */
  onMouseDownWorkflowItem = (event:any,index:number) => {
    console.log('mouseEvent',event);
    console.log('index',index);
    this.dragOffset.x = event.offsetX;
    this.dragOffset.y = event.offsetY;
    this.dragInfo = {
      isDragging:true,
      index,
    };
  }

  /**
   * アイテムのドラッグ中のイベント
   * @param event MouseEvent
   */
  onMouseMoveWorkflowItem = (event:MouseEvent) => {
    const [isDragging,index] = [this.dragInfo.isDragging,this.dragInfo.index];
    console.log(this.dragInfo);
    if(!isDragging || index === undefined || index === null){return}
    console.log('after',this.dragInfo);
    this.$workflowItems.update((value) => {
      const relative = this.getRelativePosition(event.clientX,event.clientY);
      const [positionX,positionY] = [relative.x - this.dragOffset.x,relative.y - this.dragOffset.y];
      value[index].position.x = positionX;
      value[index].position.y = positionY;
      return [...value]
    })
  }
}
