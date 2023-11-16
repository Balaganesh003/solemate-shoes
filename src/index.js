import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import store from './store';
import { Provider } from 'react-redux';
import { stripePromise } from './utils/stripe/stripe.utils';
import { Elements } from '@stripe/react-stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <Navigation />
          <App />
        </Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
