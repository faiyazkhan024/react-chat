import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Auth from "./pages/Auth/Auth";
import AppPage from "./pages/App/App";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

import Layout from "./components/Layout/Layout";
import Protected from "./components/Protected/Protected";

import { rootPath, appPath, unauthorizedPath } from "./constants/paths";
import * as ls from "./constants/localStorage";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem(ls.token));
  }, []);

  const authRoute = (
    <>
      <Redirect exact from="/" to={rootPath} />
      <Route exact path={rootPath} component={Auth} />
    </>
  );

  return (
    <HelmetProvider>
      <Router>
        <Switch>
          {!token && authRoute}
          <Route exact path={unauthorizedPath} component={Unauthorized} />
          <Layout>
            <Protected
              token={token}
              path={`${appPath}/:_id`}
              component={AppPage}
            />
          </Layout>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
