import { Component, Input } from '@angular/core';
import { Task, TaskService } from '../shared/shared';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css'],
  providers: [TaskService]
})



export default class TaskDetailComponent {
  @Input() task: Task;


  constructor(private taskService: TaskService) {



    this.task = {name: 'Test', deadline: new Date('07/30/2016'), pomodorosRequired: 1, queued: false};



    
  }

  save() {
    this.taskService
        .addTask(this.task);
        
  }







}