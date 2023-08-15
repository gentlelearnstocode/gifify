import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public';
import { MainLayout } from '@/components/layout';

export const AppRoutes = () => {
  const routes = useRoutes([...publicRoutes]); //depends on auth status, render either public routes or private routes

  return <MainLayout>{routes}</MainLayout>;
};
