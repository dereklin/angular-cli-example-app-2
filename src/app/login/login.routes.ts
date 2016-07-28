import { RouterConfig }       from '@angular/router';
import { AuthGuard, AuthService}          from '../shared/shared';

import { LoginComponent }     from './login.component';

export const loginRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];