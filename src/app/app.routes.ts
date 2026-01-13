import { Route } from '@angular/router';
import { UserRegisterComponent } from './features/auth/components/user-register/user-register.component';
import { ROUTE_PATHS } from './app.paths';

export const appRoutes: Route[] = [
  {
    path: ROUTE_PATHS.register,
    component: UserRegisterComponent
  },
  {
    path: ROUTE_PATHS.wildcard,
    redirectTo: ROUTE_PATHS.register,
    pathMatch: 'full',
  },
];
