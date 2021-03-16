import { lazy } from 'react';

const Home = lazy(() => import('views/Home'));

const appRoutes = [
  {
    path: '/',
    component: Home,
    isPrivate: false,
    exact: true,
  },
];

export default appRoutes;
