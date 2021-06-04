import React from "react";

import ReactEmoji from "react-emoji";

import currentTime from "../../../utils/currentTime";

import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  const trimmedName = name.trim().toLowerCase();

  let pColor;
  let bgColor;
  let alignment;
  let senderName;
  let none;

  switch (user) {
    case trimmedName:
      pColor = " colorWhite ";
      bgColor = " backgroundSecondary ";
      alignment = " alignEnd ";
      senderName = trimmedName;
      break;
    case "Bot":
      pColor = " colorDark alertText ";
      bgColor = " backgroundLight alertBox ";
      alignment = " alignCenter ";
      none = " displayNone ";
      break;
    default:
      pColor = " colorWhite ";
      bgColor = " backgroundAccent ";
      alignment = " alignStart ";
      senderName = user;
  }

  return (
    <div className={" messageContainer " + alignment}>
      <p className={" sentText " + none}>{senderName}</p>
      <div className={" messageBox " + bgColor}>
        <p className={" messageText " + pColor}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className={" sentText " + none}>{currentTime()}</p>
    </div>
  );
};

export default Message;
