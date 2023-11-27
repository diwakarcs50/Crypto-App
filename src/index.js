import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly from 'react-dom'
import { createRoot } from 'react-dom'; // Import createRoot from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import 'antd/dist/antd.css';
import store from './app/store'


ReactDOM.render(

  <Router>
    <Provider store={store}>
        <App />
    </Provider>
    
  </Router>,
  document.getElementById('root')
);