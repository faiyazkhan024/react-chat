import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Chat from "./pages/Chat/Chat";
import Join from "./pages/Join/Join";

import { rootPath, chatPath } from "./Constants/path";

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to={rootPath} />
      <Route path={rootPath} exact component={Join} />
      <Route path={chatPath} component={Chat} />
    </Switch>
  </Router>
);

export default App;
