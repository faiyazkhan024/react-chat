import React from "react";

import cnj from "classnames";
import { BsChatDotsFill, BsBell } from "react-icons/bs";

import Input from "../../utilities/Input/Input";

import classes from "./Header.module.css";

const Header = ({ className }) => {
  return (
    <div className={cnj(className, classes.Header)}>
      <div className={classes.Container}>
        <div className={classes.Title}>
          <BsChatDotsFill className={classes.Icon} />
          <h1>Chat</h1>
        </div>
        <div className={classes.Options}>
          <Input
            className={classes.Search}
            placeholder="search "
            type="search"
          />
          <BsBell className={classes.Icon} />
          <div className={classes.Avatar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
