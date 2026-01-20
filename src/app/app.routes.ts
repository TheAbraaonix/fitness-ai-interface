import { Route } from '@angular/router';
import { UserRegisterComponent } from './features/auth/components/user-register/user-register.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { ROUTE_PATHS } from './app.paths';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: ROUTE_PATHS.login,
    pathMatch: 'full'
  },
  {
    path: ROUTE_PATHS.login,
    component: LoginComponent,
    canActivate: [guestGuard]
  },
  {
    path: ROUTE_PATHS.register,
    component: UserRegisterComponent,
    canActivate: [guestGuard]
  },
  {
    path: ROUTE_PATHS.dashboard,
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: ROUTE_PATHS.wildcard,
    redirectTo: ROUTE_PATHS.login,
    pathMatch: 'full',
  },
];
