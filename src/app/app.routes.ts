import { provideRouter, RouterConfig }  from '@angular/router';
import { tasksRoutes } from './tasks/tasks.routes';
import { timerRoutes } from './timer/timer.routes';

const routes: RouterConfig = [
  ...tasksRoutes,
  ...timerRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];