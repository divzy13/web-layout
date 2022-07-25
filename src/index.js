import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/auth.scss";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-74mfe0u8.us.auth0.com"
    clientId="Y3quaX4CvG13spfpoVhszBqOctISrvy7"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

reportWebVitals();
