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
import { TasksService } from '../../services/tasks.service';
import { TaskIconsComponent } from '../task-icons/task-icons';
import { FormattedTimePipe } from '../../pipes/formatted-time';
import { QueuedOnlyPipe } from '../../pipes/queued-only';
import { TaskTooltipDirective } from '../../directives/task-tooltip.directive';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-tasks',
  styleUrls: ['pomodoro-tasks.css'],
  templateUrl: 'pomodoro-tasks.html',
  directives: [TaskIconsComponent, TaskTooltipDirective],
  pipes: [FormattedTimePipe, QueuedOnlyPipe],
  providers: [TasksService]
})
export class PomodoroTasksComponent {
  today: Date;
  tasks: Task[];
  tooltip: any;

  queuedPomodoros: number;
  queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoro',
    'other': '# pomodoros'
  };

  constructor(tasksService: TasksService) {
    this.tasks = tasksService.taskStore;
    this.today = new Date();
    this.updateQueuedPomodoros();
    // this.tooltip = '<div></div';
  }


  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
    
    
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
      return pomodoros + queuedTask.pomodorosRequired;
    }, 0);
  }  
};