import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/Character'
//Provider is a component that we wraps around the components those can access to the state

const store = configureStore({
  reducer: {character: userReducer},
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
)
