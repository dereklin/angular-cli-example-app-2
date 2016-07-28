import { provideRouter, RouterConfig }  from '@angular/router';
import { tasksRoutes } from './tasks/tasks.routes';
import { timerRoutes } from './timer/timer.routes';
import { loginRoutes } from './login/login.routes';
import { AUTH_PROVIDERS } from './shared/shared';

const routes: RouterConfig = [
  ...tasksRoutes,
  ...timerRoutes,
  ...loginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS
];