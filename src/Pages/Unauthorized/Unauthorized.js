import React from "react";
import cnj from "classnames";

import A from "../../components/utilities/A/A";

import { rootPath } from "../../constants/paths";
import classes from "./Unauthorized.module.css";

const Unauthorized = () => {
  return (
    <div className={classes.container}>
      <div className={classes.gandalf}>
        <div className={classes.fireball} />
        <div className={classes.skirt} />
        <div className={classes.sleeves} />
        <div className={classes.shoulders}>
          <div className={cnj(classes.hand, classes.left)} />
          <div className={cnj(classes.hand, classes.right)} />
        </div>
        <div className={classes.head}>
          <div className={classes.hair} />
          <div className={classes.beard} />
        </div>
      </div>

      <div className={classes.Message}>
        <h1>403 - You Shall Not Pass</h1>
        <br />
        <p>
          Uh oh, Gandalf is blocking the way! Maybe you have a typo in the url?
          Or you meant to go to a different location? Like...Hobbiton?
        </p>
        <br />
        <A to={rootPath} className={classes.Link}>
          Back to Home
        </A>
      </div>
    </div>
  );
};

export default Unauthorized;
