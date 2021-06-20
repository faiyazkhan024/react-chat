// import React, { useState, useEffect } from "react";

// import queryString from "query-string";
// import io from "socket.io-client";
import { Helmet } from "react-helmet-async";

import ChatGroups from "../../components/App/ChatGroups/ChatGroups";
import Chat from "../../components/App/Chat/Chats";
import ChatMembers from "../../components/App/ChatMembers/ChatMembers";

import classes from "./App.module.css";

// let socket;

const App = () => {
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  // const [users, setUsers] = useState([]);

  // const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);

  // const ENDPOINT = "https://neschat-api.herokuapp.com/";

  // useEffect(() => {
  //   const { name } = queryString.parse(location.search);

  //   socket = io(ENDPOINT);
  //   setName(name);

  //   socket.emit("join", { name, room }, () => {});

  //   socket.on("roomData", ({ room, users }) => {
  //     setUsers(users);
  //   });

  //   return () => {
  //     socket.disconnect();
  //     socket.off();
  //   };
  // }, [location.search]);

  // useEffect(() => {
  //   socket.on("message", (message) => {
  //     setMessages((pm) => [...pm, message]);
  //   });
  // }, []);

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   if (message) {
  //     socket.emit("sendMessage", message, () => {
  //       setMessage("");
  //     });
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>ReactChat </title>
      </Helmet>

      <div className={classes.Container}>
        <ChatGroups />
        <hr />
        <Chat
        // name={name}
        // message={message}
        // messages={messages}
        // setMessage={setMessage}
        />
        <hr />
        <ChatMembers />
      </div>
    </>
  );
};

export default App;
