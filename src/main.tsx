import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";  // <-- Import regular CSS here

const rootElement = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
