import React, { useState } from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Helmet>
        <title>ReactChat | Join</title>
      </Helmet>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Your UserName"
              className="joinInput"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room Name"
              className="joinInput mt-20"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            to={`./chat?name=${name}&room=${room}`}
            onClick={(event) => (!name || !room) && event.preventDefault()}
          >
            <button className="button mt-20" type="submit">
              Join Room
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Join;
