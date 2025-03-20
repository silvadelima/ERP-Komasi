import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Landing from '../pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      // Rotas públicas
      {
        path: 'lotes',
        lazy: () => import('../features/lots/pages/LotsPage'),
      },
      {
        path: 'sobre',
        lazy: () => import('../features/about/pages/AboutPage'),
      },
      {
        path: 'contato',
        lazy: () => import('../features/contact/pages/ContactPage'),
      },
      {
        path: 'login',
        lazy: () => import('../features/auth/pages/LoginPage'),
      },
      // Rotas protegidas - Cliente
      {
        path: 'cliente',
        lazy: () => import('../features/clients/pages/ClientDashboard'),
      },
      // Rotas protegidas - Admin
      {
        path: 'admin',
        lazy: () => import('../features/admin/pages/AdminDashboard'),
      },
    ],
  },
]);
