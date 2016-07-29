import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Task, TaskService } from '../shared/shared';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'pomodoro-tasks-editor',
  templateUrl: 'task-editor.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export default class TaskEditorComponent {
  taskName: string;
  task: Task;
  
  

  constructor(
    private router: Router,
    private taskService: TaskService) {
      this.task = <Task>{};


  }


  saveTask() {
    this.task.deadline = new Date(this.task.deadline.toString());
    this.taskService.addTask(this.task);
    var link = ['/tasks'];
    this.router.navigate(link);
    
  }  
}