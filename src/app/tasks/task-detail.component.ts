import { Component, Input } from '@angular/core';
import { Task, TaskService } from '../shared/shared';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css'],
  providers: [TaskService]
})
export default class TaskDetailComponent {}