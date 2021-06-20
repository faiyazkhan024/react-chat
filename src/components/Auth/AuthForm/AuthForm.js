import React from "react";

import Input from "../../utilities/Input/Input";
import Button from "../../utilities/Button/Button";

import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  return (
    <div className={classes.OuterContainer}>
      <div className={classes.InnerContainer}>
        <h1 className={classes.Heading}>Authentication</h1>
        <br />

        <div>
          <Input
            type="text"
            placeholder="Username"
            onChange={(event) => props.setUsername(event.target.value)}
            showLabel
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(event) => props.setPassword(event.target.value)}
            showLabel
          />
        </div>

        <Button
          type="submit"
          disabled={!props.isButtonActive}
          onClick={(event) => props.onSubmit(event)}
        >
          Authenticate
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
