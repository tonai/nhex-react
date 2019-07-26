import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Board } from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Board cols={5} hex margin={10} width={80} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
