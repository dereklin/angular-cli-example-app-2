import { provideRouter, RouterConfig }  from '@angular/router';
import { TasksComponent, TaskEditorComponent, TaskDetailComponent } from './tasks/tasks';
import { TimerWidgetComponent } from './timer/timer';


const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'task/editor',
    component: TaskEditorComponent
  },
  {
    path: 'timer/:id',
    component: TimerWidgetComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];