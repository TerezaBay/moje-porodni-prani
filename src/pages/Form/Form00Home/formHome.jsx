import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import '../style.css';

import FormNav from '../../../components/FormNav/formNav.jsx';
import { routesForm } from '../../../links.js';
import StyledLink from '../../../components/StyledLink/styledLink';

const FormHome = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(location);

  useEffect(() => {
    const currentLocIndex = routesForm.findIndex(
      (route) => route.path === location.pathname,
    );
    setCurrentLocationIndex(currentLocIndex);

    console.log("currentLocIndex = " + currentLocIndex);
    console.log("location.pathname = " + location.pathname);
  }, [location]);

  const nextUrl = () => {
    if (currentLocationIndex + 1 < routesForm.length) {
      return routesForm[currentLocationIndex + 1].path;
    } return false
  };
  console.log("nextUrl = " + nextUrl())

  const prevUrl = () => {
    if (currentLocationIndex > 0) {
      return routesForm[currentLocationIndex - 1].path;
    } return false
  };
  console.log("prevUrl = " + prevUrl())

  return (
    <>
      <FormNav />

      <Switch>
        {routesForm.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>

      {location.pathname !== '/formhome/form10Submit' &&
      location.pathname !== '/formhome/form11End' ? (
        <div className="form_buttons">
          {prevUrl && <StyledLink text="Zpět" url={prevUrl()} type="grey" />}
          {nextUrl && <StyledLink text="Další" url={prevUrl()} type="burgundy" />}
        </div>
      ) : null}
    </>
  );
};

export default FormHome;
