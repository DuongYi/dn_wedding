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
    label: 'Thiệp cưới Preivew',
    id: 'invitation',
  },
  {
    path: '/wedding-invitation',
    label: 'Chi tiết thiệp cưới',
    id: 'wedding-invitation',
  },
  {
    path: '/invitation-management',
    label: 'Quản lý thiệp mời',
    id: 'invitation-management',
  },
  {
    path: '/photo-album',
    label: 'Album Ảnh',
    id: 'photo-album',
  }

];

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getRouteById = (id: string): RouteConfig | undefined => {
  return routes.find(route => route.id === id);
};
