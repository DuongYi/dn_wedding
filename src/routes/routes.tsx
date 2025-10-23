export interface RouteConfig {
  path: string;
  label: string;
  id: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    id: 'home',
  },
  {
    path: '/invitation',
    label: 'Thiệp cưới',
    id: 'invitation',
  },
];

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getRouteById = (id: string): RouteConfig | undefined => {
  return routes.find(route => route.id === id);
};
