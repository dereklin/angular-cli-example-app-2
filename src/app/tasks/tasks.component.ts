import { Component, OnInit } from '@angular/core';


import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';
import TaskDetailComponent from './task-detail.component';

import {
  TaskService,
  SettingsService,
  Task,
  SHARED_PIPES
} from '../shared/shared';

import { Router } from '@angular/router';
import * as moment from 'moment';
import 'd3'
declare var d3;


@Component({
  selector: 'pomodoro-tasks',
  directives: [TaskIconsComponent, TaskTooltipDirective, TaskDetailComponent],
  pipes: [SHARED_PIPES],
  styleUrls: ['app/tasks/tasks.component.css'],
  templateUrl: 'app/tasks/tasks.component.html'
})
export default class TasksComponent implements OnInit {
  today: Date;
  tasks: Task[];
  queuedPomodoros: number;
  queueHeaderMapping: any;
  timerMinutes: number;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private settingsService: SettingsService) {

    this.tasks = this.taskService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
    this.timerMinutes = settingsService.timerMinutes;

  }

  ngOnInit(): void {
    this.tasks = this.taskService.taskStore;
    
    this.updateQueuedPomodoros();

    this.taskService.taskFeed.subscribe(newTask => {
      console.log("before");
      this.tasks.forEach(function(t) {
        console.log(t);
      });


      this.tasks.push(newTask);
      console.log("after");
      this.tasks.forEach(function(t) {
        console.log(t);
      });
      this.updateQueuedPomodoros();
    });


  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter((Task: Task) => Task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
      return pomodoros + queuedTask.pomodorosRequired;
    }, 0);
    console.log("there are " + this.queuedPomodoros + " queued");
  }

  onSave(task: Task) {
    this.tasks.push(task);
  }

  workOn(index: number): void {
    let link = ['/timer', index];
    this.router.navigate(link);
  }  

};
