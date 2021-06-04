import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Chat from "./pages/Chat/Chat";
import Join from "./pages/Join/Join";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </Router>
);

export default App;
