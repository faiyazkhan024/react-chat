import React from "react";
import cnj from "classnames";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={cnj(props.className, classes.Button)}
      disabled={props.disabled}
      onClick={(event) => props.onClick && props.onClick(event)}
    >
      {props.children}
    </button>
  );
};

export default Button;
