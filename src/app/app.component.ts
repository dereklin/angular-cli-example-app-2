import { Component } from '@angular/core';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-app',
  directives: [TIMER_DIRECTIVES, TASKS_DIRECTIVES],
  providers: [SHARED_PROVIDERS, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {}
