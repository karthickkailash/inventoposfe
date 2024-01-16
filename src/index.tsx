import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import App from './appcontainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
  </>
);

