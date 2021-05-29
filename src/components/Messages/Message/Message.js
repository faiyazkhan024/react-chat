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
      pColor = "colorWhite";
      bgColor = "backgroundSecondary";
      alignment = "justifyEnd";
      senderName = trimmedName;
      none = "";
      break;
    case "Bot":
      pColor = "colorWhite alertText";
      bgColor = "backgroundAccent alertBox";
      alignment = "justifyCenter";
      senderName = "";
      none = "displayNone";
      break;
    default:
      pColor = "colorDark ";
      bgColor = "backgroundLight";
      alignment = "justifyStart";
      senderName = user;
      none = "";
  }

  return (
    <div className={"messageContainer " + alignment}>
      <p className={"sentText " + none}>{senderName}</p>
      <div className={"messageBox " + bgColor}>
        <p className={"messageText " + pColor}>{ReactEmoji.emojify(text)}</p>
      </div>
      <p className={"sentText " + none}>{currentTime()}</p>
    </div>
  );
};

export default Message;
