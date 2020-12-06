import Homepage from './pages/Homepage/homepage.jsx';
import Info from './pages/Info/info.jsx';
import FormHome from './pages/Form/Form00Home/formHome.jsx';
import Form01Start from './pages/Form/Form01Start/form01Start.jsx';
import Form02BasicInfo from './pages/Form/Form02BasicInfo/form02BasicInfo.jsx';
import Form03BeforeBirth from './pages/Form/Form03BeforeBirth/form03BeforeBirth.jsx';
import Form04PreLabour from './pages/Form/Form04PreLabour/form04PreLabour.jsx';
import Form05DuringLabour from './pages/Form/Form05DuringLabour/form05DuringLabour.jsx';
import Form06AfterBirth from './pages/Form/Form06AfterBirth/form06AfterBirth.jsx';
import Form07InHospital from './pages/Form/Form07InHospital/form07InHospital.jsx';
import Form08PersonalNotes from './pages/Form/Form08PersonalNotes/form08PersonalNotes.jsx';
import Form09Preferences from './pages/Form/Form09Preferences/form09Preferences.jsx';
import Form10Submit from './pages/Form/Form10Submit/form10Submit.jsx';
import Form11End from './pages/Form/Form11End/form11End.jsx';

export const routes = [
  { path: '/', component: Homepage, exact: true },
  { path: '/formhome', component: FormHome },
  { path: '/info', component: Info },
];

export const links = [
  { name: 'Domů', url: `${routes[0].path}` },
  { name: 'Sestavit přání', url: `${routes[1].path}` },
  { name: 'Další užitečné informace', url: `${routes[2].path}` },
];

export const routesForm = [
  { path: '/formhome', component: Form01Start, exact: true },
  { path: '/formhome/form02BasicInfo', component: Form02BasicInfo },
  { path: '/formhome/form03BeforeBirth', component: Form03BeforeBirth },
  { path: '/formhome/form04PreLabour', component: Form04PreLabour },
  { path: '/formhome/form05DuringLabour', component: Form05DuringLabour },
  { path: '/formhome/form06AfterBirth', component: Form06AfterBirth },
  { path: '/formhome/form07InHospital', component: Form07InHospital },
  { path: '/formhome/form08PersonalNotes', component: Form08PersonalNotes },
  { path: '/formhome/form09Preferences', component: Form09Preferences },
  { path: '/formhome/form10Submit', component: Form10Submit },
  { path: '/formhome/form11End', component: Form11End },
];
