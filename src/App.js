import React, { useState } from "react";
import "./styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Note from "./components/Note.js";
import SideBar from "./components/Sidebar.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js"

function App() {

  const [token, setToken] = useState();

  if (!token){
    return <Login setToken={setToken} />
  }
  return (
    <div>

            <SideBar />
            <Note />

    </div>
  );
}
export default App;
