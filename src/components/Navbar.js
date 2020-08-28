import React, { Component } from "react";
import { Link } from "gatsby";

import Toggle from './Toggle';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar" ref="navbar">
                    <Link to={"/"} className="navbar-link">
                        Home
                    </Link>
                    <Link to={"/projects"} className="navbar-link">
                        Projects
                    </Link>
                   <Toggle />
                </nav>
            </div>
        );
    }
}
