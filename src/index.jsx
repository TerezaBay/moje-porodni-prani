import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {routes} from "./links.js"
import './index.html';
import './style.css';

import Navbar from './components/Navbar/navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
