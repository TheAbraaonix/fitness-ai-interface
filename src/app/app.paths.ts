export interface RoutePaths {
  // Auth
  login: string;
  register: string;
  
  // App
  dashboard: string;
  
  // Global
  wildcard: string;
}

export const ROUTE_PATHS: RoutePaths = {
  // Auth
  login: 'login',
  register: 'register',
  
  // App
  dashboard: 'dashboard',
  
  // Global
  wildcard: '**'
};