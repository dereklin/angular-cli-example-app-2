import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { Task, TaskService } from '../shared/shared';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css'],
  providers: [TaskService]
})



export default class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  @Output() onSave = new EventEmitter<Task>();


  constructor(private taskService: TaskService) {



    this.task = {name: 'Test', deadline: new Date('07/30/2016'), pomodorosRequired: 1, queued: false};



    
  }

  ngOnInit(): void {

    this.taskService.taskFeed.subscribe(newTask => {
      
      
    });
  }

  

  save() {
    this.onSave.emit(this.task);

    // this.taskService
    //     .addTask(this.task);
        
  }







}