import { Component } from '@angular/core';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgLocalization } from '@angular/common';

class MessagesLocalization extends NgLocalization {
   getPluralCategory(value: any) {
      if(value > 1) {
        return 'other';
     }
  }
}

@Component({
  moduleId: module.id,
  selector: 'pomodoro-app',
  directives: [TIMER_DIRECTIVES, TASKS_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [SHARED_PROVIDERS, {provide: NgLocalization, useClass: MessagesLocalization}],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {}
