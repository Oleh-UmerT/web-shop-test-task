import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './init/store';
import App from './App';
import './styles/index.css';
import { CartProvider } from "react-use-cart";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider >
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
