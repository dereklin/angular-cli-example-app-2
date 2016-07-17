import {
  Component,
  Input,
  Pipe,
  PipeTransform,
  Directive,
  OnInit,
  HostListener
} from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-task-icons',
  template: `<img *ngFor="let icon of icons"
                  src="../../app/assets/img/pomodoro.jpg"
                  width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  icons: Object[] = [];
  @Input() size: number;

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
  }
}