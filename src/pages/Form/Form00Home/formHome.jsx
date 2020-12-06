import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "../style.css";

import FormNav from "../../../components/FormNav/formNav.jsx";
import { routesForm } from "../../../links.js";
import StyledLink from "../../../components/StyledLink/styledLink";

import { useFormContext } from "../../../utils/formContext.jsx";
import { db } from "../../../db.js";

const FormHome = () => {
  const location = useLocation();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const { formState, setFormState } = useFormContext();

  useEffect(() => {
    const currentLocIndex = routesForm.findIndex(
      (route) => route.path === location.pathname
    );
    setCurrentLocationIndex(currentLocIndex);

    console.log("location.pathname = " + location.pathname)
    console.log("routesForm[0] = " + routesForm[0].path)

  }, [location]);

  useEffect(() => {
    const collection = db.collection("porodni-prani");
    const documentData = { form: formState.form };
    let docId = formState.docId;
    if (formState.docId === null) {
      docId = window.sessionStorage.getItem("docId");
      if (docId != null) {
        setFormState(docId, "docId");
      }
    }
    if (docId === null) {
      collection.add(documentData).then((docRef) => {
        setFormState(docRef.id, "docId");
        window.sessionStorage.setItem("docId", docRef.id);
        docRef.onSnapshot((doc) => {
          setFormState({ docId: docRef.id, form: doc.data().form }, "all");
        });
      });
    } else {
      collection.doc(docId).set(documentData);
    }
  }, [location]);

  console.log("currentLocI = " + currentLocationIndex)

  const nextUrl = () => {
    if (currentLocationIndex + 1 < routesForm.length - 1) {
      return routesForm[currentLocationIndex + 1].path;
    }
    return false;
  };

  console.log("nextUrl = " + nextUrl())
  console.log("---------")

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

      {location.pathname !== "/formhome/form11End" ? (
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
