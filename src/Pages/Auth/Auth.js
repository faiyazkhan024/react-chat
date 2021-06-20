import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";

import AuthArt from "../../components/Auth/AuthArt/AuthArt";
import AuthForm from "../../components/Auth/AuthForm/AuthForm";

import { appPath } from "../../constants/paths";
import * as ls from "../../constants/localStorage";
import classes from "./Auth.module.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsButtonActive(() => {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
      if (trimmedUsername === "" || trimmedPassword === "") return false;
      if (trimmedUsername.length < 3 || trimmedPassword.length < 8)
        return false;
      return true;
    });
  }, [password, username]);

  const onLogin = async (event) => {
    event.preventDefault();
    const user = { username, password };
    try {
      const body = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/register`,
        user
      );
      localStorage.setItem(ls.token, body.data.token);
      history.push(`${appPath}/${body.data.user._id}`);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ReactChat | Auth</title>
      </Helmet>
      <main className={classes.Main}>
        <div className={classes.Auth}>
          <AuthArt />
          <AuthForm
            onSubmit={onLogin}
            setUsername={setUsername}
            setPassword={setPassword}
            isButtonActive={isButtonActive}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Auth;
