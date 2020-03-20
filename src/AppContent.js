import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

class AppContent extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>
            </HashRouter>
        );
    }
}

export default AppContent;