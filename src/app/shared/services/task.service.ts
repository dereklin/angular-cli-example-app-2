import { Injectable } from '@angular/core';
import { Task } from '../shared';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class TaskService {
  taskStore: Task[] = [];
  taskFeed: Observable<Task>;
  private taskObserver: any;
  // private dataUrl = '/app/shared/data/raw-tasks.json';
  private dataUrl = '/app/tasks';

  constructor(private http: Http) {
    this.taskFeed = Observable.create(observer => {
      this.taskObserver = observer;
    });
    this.fetchTasks();
  }

  private getTasksJson(): Observable<any[]> {
    return this.http.get(this.dataUrl)
            .map(
              response => response.json().data
            );
  }

  private getTasks(): Observable<Task[]> {
    return this.getTasksJson()
      .map(
        stream => stream.map(
          res => {
        return {
          name: res.name,
          deadline: new Date(res.deadline),
          pomodorosRequired: res.pomodorosRequired,
          queued: res.queued
        }
      }));
  }

  private fetchTasks(): void {
    this.getTasks()
      .subscribe(
        tasks => {
          this.taskStore = tasks;
          tasks.forEach(
            task => {if (this && this.taskObserver) 
                {
                  this.taskObserver.next(task)
                }
              }
            )
        },
        error => console.log(error)
      );
  }

  addTask(task: Task): void {
    this.taskObserver.next(task);
    this.taskStore.push(task);
  }  

}
