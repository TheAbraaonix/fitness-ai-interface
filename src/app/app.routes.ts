import { Route } from '@angular/router';
import { UserRegisterComponent } from './features/auth/components/user-register/user-register.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { ROUTE_PATHS } from './app.paths';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: ROUTE_PATHS.login,
    pathMatch: 'full'
  },
  {
    path: ROUTE_PATHS.login,
    component: LoginComponent
  },
  {
    path: ROUTE_PATHS.register,
    component: UserRegisterComponent
  },
  {
    path: ROUTE_PATHS.wildcard,
    redirectTo: ROUTE_PATHS.login,
    pathMatch: 'full',
  },
];
