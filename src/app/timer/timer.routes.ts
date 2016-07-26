import { RouterConfig }  from '@angular/router';
import { TimerWidgetComponent } from './timer';
import TimerComponent from './timer.component';

export const timerRoutes: RouterConfig = [
  {
    path: 'timer',
    component: TimerComponent,
    children: [
      {path: ':id', component: TimerWidgetComponent},
      {path: '', component: TimerWidgetComponent}
    ]
  }
];
