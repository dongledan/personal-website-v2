import React, { Component } from "react";
import Typed from "typed.js";

import { typewriterContentOptions } from "../content/headerContent";
import Image from "./image";
import ColorLine from "./ColorLine";

export default class Header extends Component {
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
                <div className="header">Danny Li</div>
                <ColorLine />
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
