import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { home } from './texts/homeTexts.js';
import { routes } from './links.js';
import './index.html';
import './style.css';

import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import { FormContextProvider } from './utils/formContext';

const App = () => {
  return (
    <FormContextProvider>
      <Router>
        <Navbar />

        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>

        <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
      </Router>
    </FormContextProvider>
  );
};

render(<App />, document.querySelector('#app'));
