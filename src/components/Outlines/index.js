import React, { Component } from "react";

import ColorLine from "../ColorLine";

export default class Outlines extends Component {
    render() {
        return (
            <div className="outlines-container">
                <div className="header">Outlines</div>
                <ColorLine />
            </div>
        );
    }
}
