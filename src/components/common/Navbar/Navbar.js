import React from "react";

import cnj from "classnames";

import { FaWallet } from "react-icons/fa";

import { GoFileSubmodule } from "react-icons/go";

import {
  BsList,
  BsFillBookmarksFill,
  BsChatDotsFill,
  BsImages,
  BsPeopleCircle,
} from "react-icons/bs";

import classes from "./Navbar.module.css";

const Navbar = ({ className }) => {
  return (
    <nav className={cnj(className, classes.Navbar)}>
      <div className={classes.Container}>
        <div className={classes.Menu}>
          <BsList />
        </div>
        <div className={classes.NavItems}>
          <BsFillBookmarksFill />
          <BsImages />
          <GoFileSubmodule />
          <BsPeopleCircle />
          <BsChatDotsFill />
          <FaWallet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
