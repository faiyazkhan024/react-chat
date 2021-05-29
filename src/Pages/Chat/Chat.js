import React, { useState, useEffect } from "react";

import queryString from "query-string";
import io from "socket.io-client";
import { Helmet } from "react-helmet";

import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Messages from "../../components/Messages/Messages";
import TextContainer from "../../components/TextContainer/TextContainer";

import classes from "./Chat.module.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);

  const [messageContent, setMessageContent] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "https://neschat-api.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    socket.on("roomData", ({ room, users }) => {
      setUsers(users);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((pm) => [...pm, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (messageContent) {
      socket.emit("sendMessage", messageContent, () => {
        setMessageContent("");
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ReactChat | Room {room}</title>
      </Helmet>
      <div className={classes.outerContainer}>
        <div className={classes.container}>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            setMessage={setMessageContent}
            sendMessage={sendMessage}
            message={messageContent}
          />
        </div>
        <TextContainer users={users} />
      </div>
    </>
  );
};

export default Chat;
