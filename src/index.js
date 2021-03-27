import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './components/Navbar.js'
import Note from './components/Note.js'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Note />
  </React.StrictMode>,
  document.getElementById('root')
);

