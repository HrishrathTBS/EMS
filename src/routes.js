import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import ForgetPwd from './pages/Authentication/ForgetPwd';
import AuthLayout from './layouts/AuthLayout';
import AuthGuard from './Guards/AuthGuard';
import Profile from './pages/Authentication/Profile';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/Ex',
      children: [
        { element: <Navigate to="/Ex/dashboard/app" />, index: true },
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to="/dashboard/app" />, index: true },
            { path: 'app', element: <DashboardAppPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'blog', element: <BlogPage /> },
          ],
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
      ],
    },
    {
      path: 'login',
      element: (
        <AuthLayout pageType="signin">
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: 'register',
      element: (
        <AuthLayout pageType="signup">
          <Signup />
        </AuthLayout>
      ),
    },
    {
      path: 'forgetpwd',
      element: (
        <AuthLayout pageType="forgetPwd">
          <ForgetPwd />
        </AuthLayout>
      ),
    },

    {
      element: (
        <AuthGuard>
          <SimpleLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="Ex/dashboard/app" />, index: true },
        { path: 'Ex/dashboard/user' },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
