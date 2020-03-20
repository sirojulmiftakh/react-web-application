import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(<AppHeader />, document.getElementById('header'));
ReactDOM.render(<AppContent />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
