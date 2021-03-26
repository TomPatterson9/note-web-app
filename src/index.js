import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import Note from './components/Note.js'
import Login from "./components/Login.js";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Login />
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);

