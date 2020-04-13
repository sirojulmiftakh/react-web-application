import React from "react";
import {HashRouter,NavLink} from "react-router-dom";

class AppHeader extends React.Component {
    render() {
        return (
            <HashRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">React Web</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {/*<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>*/}
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="/about">About</a>*/}
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="/contact">Contact</a>*/}
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="/crud">Crud</a>*/}
                                <NavLink to="/crud" className="nav-link">Crud</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </HashRouter>
        );
    }
}

export default AppHeader;