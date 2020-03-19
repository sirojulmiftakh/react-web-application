import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./AppHeader";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import $ from "jquery";

class App extends React.Component {
    render() {
        return (<div>Hi React</div>)
    }
}

ReactDOM.render(<AppHeader />, document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
