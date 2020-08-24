import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar" ref="navbar">
                    {["Home", "Projects", "Contact"].map(link => (
                        <Link
                            key={link}
                            to={`/#${link.toLowerCase()}`}
                            className="navbar-link"
                        >
                            <span>{link}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        );
    }
}
