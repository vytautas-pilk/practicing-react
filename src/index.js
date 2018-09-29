import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {posts} from './static-data';

ReactDOM.render(<App data={posts}/>, document.querySelector("#root"));
