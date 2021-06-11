import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";

import classes from "./ChatsScreen.module.css";

const ChatScreen = ({
  name,
  room,
  messages,
  sendMessage,
  message,
  setMessage,
}) => (
  <div className={classes.Container}>
    <div className={classes.RoomName}>
      <h1>{room}</h1>
    </div>
    <ScrollToBottom className={classes.ChatScreen}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
    <MessageInput
      setMessage={setMessage}
      sendMessage={sendMessage}
      message={message}
    />
  </div>
);

export default ChatScreen;
