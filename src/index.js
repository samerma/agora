import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Inventory } from '../src/stores/Inventory'
import { Provider } from 'mobx-react';

const inventory = new Inventory()
const stores = { inventory }
ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
