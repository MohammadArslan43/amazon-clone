import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./Redux/store"

// Remove or comment these lines if not needed
import './index.css';
// Remove or comment these lines if not needed
import './index.css';
//import reportWebVitals from './reportWebVitals';

// And also comment out this line if it's there:
//reportWebVitals();


// And also comment out this line if it's there:
//reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
