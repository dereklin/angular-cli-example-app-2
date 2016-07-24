import { provideRouter, RouterConfig }  from '@angular/router';
import { TasksComponent, TaskEditorComponent } from './tasks/tasks';
import { TimerWidgetComponent } from './timer/timer';


const routes: RouterConfig = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'tasks/editor',
    component: TaskEditorComponent
  },
  {
    path: 'timer',
    component: TimerWidgetComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];