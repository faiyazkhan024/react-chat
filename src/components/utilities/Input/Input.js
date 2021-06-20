import cnj from "classnames";
import React from "react";

import classes from "./Input.module.css";

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  onKeyPress,
  label,
  showLabel,
  classNameLabel,
}) => {
  return (
    <React.Fragment>
      {showLabel && (
        <label className={cnj(classNameLabel, classes.label)}>
          {label ? label : placeholder}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={cnj(className, classes.input)}
        onChange={(event) => onChange && onChange(event)}
        onKeyPress={(event) => onKeyPress && onKeyPress(event)}
      />
    </React.Fragment>
  );
};

export default Input;
