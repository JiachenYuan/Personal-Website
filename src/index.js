import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Skill from './Components/Skill';
import Coursework from './Components/Coursework';

const element = 
  <React.StrictMode>
    <NavBar />
    <Intro />
    <About />
    <Skill />
    <Coursework />

  </React.StrictMode>

;
ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
