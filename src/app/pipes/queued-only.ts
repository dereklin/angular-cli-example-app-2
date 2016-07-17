import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Pipe({
  name: 'pomodoroQueuedOnly',
  pure: false
})
export class QueuedOnlyPipe implements PipeTransform {
  transform(tasks: [Task], ...args: any[]): Task[] {
    return tasks.filter((task: Task) => {
      return task.queued === args[0];
    });
  }
}