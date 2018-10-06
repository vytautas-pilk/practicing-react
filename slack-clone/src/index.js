import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { channelMessages, users } from './initialData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App channelMessages={channelMessages} users={users}/>,
  document.getElementById('root'));
registerServiceWorker();
