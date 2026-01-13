export interface RoutePaths {
  // Auth
  register: string;
  
  // Global
  wildcard: string;
}

export const ROUTE_PATHS: RoutePaths = {
  // Auth
  register: 'register',
  
  // Global
  wildcard: '**'
};