import React from 'react';
import ReactDOM from 'react-dom';
import './STYLES/index.css';
import App from './App';
import { channels, users } from './initialData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App channels={channels} users={users}/>,
  document.getElementById('root'));
registerServiceWorker();
