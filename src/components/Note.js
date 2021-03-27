import styled from "styled-components";
import "../styles/index.css";
import Login from "../components/Login.js";
import React from "react";

function Note() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  var pointerEvents = "none";
  var visibilityEvent = "visible";

  const handleCallback = (childData) => {
    setLoggedIn(childData);
  };

  if (loggedIn) {
    pointerEvents = "auto";
    visibilityEvent = "hidden";
  }

  const Text = styled.textarea`
    background-color: #28112b;
    width: 95vw;
    color: white;
    height: 90vh;
    margin: 20px;
    resize: none;
    border-style: none;
    border-color: Transparent;
    overflow: auto;
    border: 0px;
    font-family: "Roboto", sans-serif;
    pointer-events: ${pointerEvents};
  `;

  return (
    <>
      <Text></Text>
      <Login
        parentCallback={handleCallback}
        visibilityConfig={visibilityEvent}
      />
      {console.log(setLoggedIn)}
    </>
  );
}
export default Note;
