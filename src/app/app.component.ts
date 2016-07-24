import { Component } from '@angular/core';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgLocalization } from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'pomodoro-app',
  directives: [TIMER_DIRECTIVES, TASKS_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [SHARED_PROVIDERS, NgLocalization],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {}
