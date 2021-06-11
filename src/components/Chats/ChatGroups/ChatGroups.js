import React from "react";

import { BiSearch, BiCommentAdd } from "react-icons/bi";

import classes from "./ChatGroups.module.css";

const ChatGroups = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.TopBar}>
        <h2>Groups</h2>
        <div className={classes.Options}>
          <div className={classes.Search}>
            <BiSearch />
          </div>
          <div className={classes.Add}>
            <BiCommentAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGroups;
