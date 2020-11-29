import Homepage from './pages/Homepage/homepage.jsx';
import Info from './pages/Info/info.jsx';
import Article from './pages/Homepage/homepage.jsx';
import Form01 from './pages/Form/Form 01/form01.jsx';
import FormHome from './pages/Form/Form 00 home/formhome.jsx';

export const routes = [
  { path: '/', component: Homepage, exact: true },
  { path: '/formhome', component: FormHome },
  { path: '/info', component: Info },
];

export const links = [
  { name: 'Domů', url: `${routes[0].path}` },
  { name: 'Sestavit přání', url: `${routes[1].path}` },
  { name: 'Užitečné informace', url: `${routes[2].path}` },
];

export const routesForm = [
  { path: '/formhome/', component: Form01 },
  // { path: '/form02', component: Form02 },
  // { path: '/form', component: Info },
  // { path: '/form', component: Article },
];
