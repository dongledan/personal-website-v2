import { Link } from "gatsby";
import PropTypes from "prop-types";
import Typed from "typed.js";
import React, { Component } from "react";

import { typewriterContentOptions } from "../content/headerContent";
import Image from "./image";
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.typed = new Typed(this.typewriter, typewriterContentOptions);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (
            <div className="header-container">
                <Image />
                <span className="header-title">Danny Li</span>
                <div className="colors-container">
                  <div className="color"></div>
                  <div className="color"></div>
                  <div className="color"></div>
                  <div className="color"></div>
                  <div className="color"></div>
                </div>
                <span
                    className="header-content"
                    ref={typewriter => {
                        this.typewriter = typewriter;
                    }}
                ></span>
            </div>
        );
    }
}
