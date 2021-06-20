import React from "react";
import { Route, Redirect } from "react-router-dom";

import { unauthorizedPath, appPath } from "../../constants/paths";

const Protected = ({ children, token, ...rest }) => {
  if (token) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect exact from={`${appPath}/:_id`} to={unauthorizedPath} />;
  }
};

export default Protected;
