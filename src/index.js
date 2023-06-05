import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// '@fortawesome/react-fontawesome' in 'D:\Hackathons_Competitions\AspireInfo_internship\aspirez\src\components'

// ERROR in ./src/components/Courses.js 7:0-59
// Module not found: Error: Can't resolve '@fortawesome/free-solid-svg-icons' in 