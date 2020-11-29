import Homepage from './pages/Homepage/homepage.jsx';
import Info from './pages/Info/info.jsx';
import Article from './pages/Homepage/homepage.jsx';
import FormHome from './pages/Form/Form00Home/formHome.jsx';
import Form01Start from './pages/Form/Form01Start/form01Start.jsx';
import Form02BasicInfo from './pages/Form/Form02BasicInfo/form02BasicInfo.jsx';
import Form03BeforeBirth from './pages/Form/Form03BeforeBirth/form03BeforeBirth.jsx';

export const routes = [
  { path: '/', component: Homepage, exact: true },
  { path: '/formhome', component: FormHome },
  { path: '/info', component: Info },
  { path: '/article', component: Article },
];

export const links = [
  { name: 'Domů', url: `${routes[0].path}` },
  { name: 'Sestavit přání', url: `${routes[1].path}` },
  { name: 'Užitečné informace', url: `${routes[2].path}` },
];

// musí začínat na formhome/
export const routesForm = [
  { path: '/formhome/form01Start', component: Form01Start },
  { path: '/formhome/form02BasicInfo', component: Form02BasicInfo },
  { path: '/formhome/form03BeforeBirth', component: Form03BeforeBirth },
  // { path: '/formhome/form', component: Article },
  // { path: '/formhome/form', component: Info },
  // { path: '/formhome/form', component: Article },
  // { path: '/formhome/form', component: Info },
  // { path: '/formhome/form', component: Article },
];
