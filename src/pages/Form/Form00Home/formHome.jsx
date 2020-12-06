import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import '../style.css';

import FormNav from '../../../components/FormNav/formNav.jsx';
import { routesForm } from '../../../links.js';
import StyledLink from '../../../components/StyledLink/styledLink';

import { useFormContext } from '../../../utils/formContext.jsx';
import { db } from '../../../db.js';

const FormHome = () => {
  const location = useLocation();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const { formState, setFormState } = useFormContext();

  const watchChanges = (docRef) => {
    docRef.onSnapshot((doc) => {
      setFormState({ docId: docRef.id, form: doc.data().form }, 'all');
    });
  };

  useEffect(() => {
    const currentLocIndex = routesForm.findIndex(
      (route) => route.path === location.pathname,
    );
    setCurrentLocationIndex(currentLocIndex);
  }, [location]);

  useEffect(() => {
    const collection = db.collection('porodni-prani');
    const documentData = { form: formState.form };
    let docId = new URLSearchParams(location.search).get('id');
    if (docId != null) {
      //load from query string from URL
      setFormState(docId, 'docId');
      watchChanges(collection.doc(docId));
      return;
    }
    docId = formState.docId;
    if (formState.docId !== null) {
      //update database
      collection.doc(docId).set(documentData);
      return;
    }
    docId = window.sessionStorage.getItem('docId');
    if (docId != null) {
      //load from sessionStorage
      setFormState(docId, 'docId');
      watchChanges(collection.doc(docId));
      return;
    }
    //create new in database
    collection.add(documentData).then((docRef) => {
      setFormState(docRef.id, 'docId');
      window.sessionStorage.setItem('docId', docRef.id);
      watchChanges(docRef);
    });
  }, [location]);

  const nextUrl = () => {
    if (currentLocationIndex + 1 < routesForm.length - 1) {
      return routesForm[currentLocationIndex + 1].path;
    }
    return false;
  };

  const prevUrl = () => {
    if (currentLocationIndex > 0) {
      return routesForm[currentLocationIndex - 1].path;
    }
    return false;
  };

  return (
    <>
      <FormNav />

      <Switch>
        {routesForm.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>

      {location.pathname !== '/formhome/form11End' ? (
        <div className="form_buttons">
          {prevUrl() && <StyledLink text="Zpět" url={prevUrl()} type="grey" />}
          {nextUrl() && (
            <StyledLink text="Další" url={nextUrl()} type="burgundy" />
          )}
        </div>
      ) : null}
    </>
  );
};

export default FormHome;
