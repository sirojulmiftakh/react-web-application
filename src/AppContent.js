import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Crud from "./pages/crud";

class AppContent extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/crud" component={Crud}></Route>
                </div>
            </HashRouter>
        );
    }
}

export default AppContent;