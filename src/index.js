import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rotas from './Rotas';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Rotas />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
