import React from "react";

// import Message from "./Message/Message";
// import MessageInput from "./MessageInput/MessageInput";

import classes from "./Chats.module.css";

const Chat = () => (
  <div className={classes.Container}>
    <div className={classes.RoomName}>
      <h1>Room</h1>
    </div>
    <div className={classes.Chat}>
      {/* {messages.map((message, i) => (
        <Message message={message} name={name} key={i} />
      ))} */}
    </div>
    {/* <MessageInput
    setMessage={setMessage}
    sendMessage={sendMessage}
    message={message}
    /> */}
  </div>
);

export default Chat;
