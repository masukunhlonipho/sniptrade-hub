// src/modules/payment/PayPalProvider.js
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "ASITobn1tcaROkEVqofTY9ckJoZLI1nV_ohnMbl5hPzDXSTeMRD78-1Hnpf_Xa6V88EJZrWsI5Mm4_Ky",
  currency: "USD",
};

const PayPalProvider = ({ children }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;
