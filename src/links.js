import Homepage from './pages/Homepage/homepage.jsx';
import Form from './pages/Form/form.jsx';
import Info from './pages/Info/info.jsx';
import Article from './pages/Homepage/homepage.jsx';

export const routes = [
  { path: '/', component: Homepage, exact: true },
  { path: '/form', component: Form },
  { path: '/info', component: Info },
  { path: '/article', component: Article },
];

export const links = [
  { name: 'Domů', url: `${routes[0].path}` },
  { name: 'Sestavit přání', url: `${routes[1].path}` },
  { name: 'Užitečné informace', url: `${routes[2].path}` },
]