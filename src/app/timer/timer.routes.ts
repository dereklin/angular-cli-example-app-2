import { RouterConfig }  from '@angular/router';
import { TimerWidgetComponent } from './timer';

export const timerRoutes: RouterConfig = [
  {
    path: 'timer/:id',
    component: TimerWidgetComponent
  }
];
