// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// Initial PayPal configuration
const initialOptions = {
  "client-id": "ASITobn1tcaROkEVqofTY9ckJoZLI1nV_ohnMbl5hPzDXSTeMRD78-1Hnpf_Xa6V88EJZrWsI5Mm4_Ky", // Replace with your PayPal client ID
  currency: "USD",
  intent: "capture",
};

// Use the correct ID for the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

// Performance logging (optional)
reportWebVitals();
