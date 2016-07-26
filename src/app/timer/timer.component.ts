import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'pomodoro-timer',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]

})
export default class TimerComponent {}