import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Join from "./Pages/Join/Join";
import Chat from "./Pages/Chat/Chat";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </Router>
);

export default App;
