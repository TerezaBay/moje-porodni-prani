import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

import FormNav from '../../../components/FormNav/formNav.jsx';
import { routesForm } from '../../../links.js';

const FormHome = () => {
  return (
    <>
      <FormNav />

      <Switch>
        {routesForm.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default FormHome;
