import { provideRouter, RouterConfig }  from '@angular/router';
import { tasksRoutes } from './tasks/tasks.routes';
import { timerRoutes } from './timer/timer.routes';
import { loginRoutes } from './login/login.routes';
import { chartsRoutes } from './charts/charts.routes';
import { AUTH_PROVIDERS } from './shared/shared';
import { tempRoutes } from './temp/temp.routes';

const routes: RouterConfig = [
  ...tasksRoutes,
  ...timerRoutes,
  ...loginRoutes,
  ...chartsRoutes,
  ...tempRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS
];