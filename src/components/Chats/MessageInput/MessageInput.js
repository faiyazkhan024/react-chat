import React from "react";

import { IoSend, IoAttach } from "react-icons/io5";

import Input from "../../utilities/Input/Input";

import classes from "./MessageInput.module.css";

const MessageInput = ({ setMessage, sendMessage, message }) => (
  <form className={classes.Form}>
    <button disabled className={classes.Button}>
      <IoAttach />
    </button>
    <Input
      className={classes.Input}
      type="text"
      placeholder="Write a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
    />
    <button className={classes.Button} onClick={(e) => sendMessage(e)}>
      <IoSend />
    </button>
  </form>
);

export default MessageInput;
