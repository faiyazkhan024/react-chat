import React from "react";
import { Link } from "react-router-dom";
import cnj from "classnames";

import classes from "./A.module.css";

const A = ({ to, children, className }) => {
  return (
    <Link to={to} className={cnj(className, classes.A)}>
      {children}
    </Link>
  );
};

export default A;
