import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import Note from './components/Note.js'
import SideBar from './components/Sidebar.js'

ReactDOM.render(
  <React.StrictMode>

    <SideBar />
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);

