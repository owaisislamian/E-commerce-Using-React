import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
  <Router>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Router>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
); 