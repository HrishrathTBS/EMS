// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Exdashboard',
    path: '/Ex/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Exhome',
    path: '/Ex/dashboard/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Exuser',
    path: '/Ex/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Exproduct',
    path: '/Ex/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Exblog',
    path: '/Ex/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'ExLogin',
    path: '/Ex/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'forgetpwd',
    path: '/forgetpwd',
    icon: icon('ic_lock'),
  },
  {
    title: 'Sign Up',
    path: '/register',
    icon: icon('ic_lock'),
  },
  {
    title: 'Practice',
    path: '/Ex/practice',
    icon: icon('ic_lock'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
