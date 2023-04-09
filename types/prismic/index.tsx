type RouteTypes = 'home';
type RouteIDS = 'home-entry-name';
type RoutePaths = '/';

export interface PrismicRouteProps {
  type: RouteTypes;
  uid: RouteIDS;
  path: RoutePaths;
}
