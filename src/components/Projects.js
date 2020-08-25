import React, { Component } from "react";

import JUNFUSUMA from "../images/JUNFUSUMA.png";
import ColorLine from "./ColorLine";

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="header">Projects</div>
                <ColorLine />
                <div className="project-container">
                    <div className="project-content">
                        <div className="project-title">JUNFUSUMA</div>
                        <hr />
                        <div className="project-desc">
                            A fun side project where I designed a modern
                            shopping experience. I provided all images, logos,
                            and design. JUNFUSUMA is the past, present, and
                            future of fashion.
                        </div>
                    </div>
                    <img className="project-img" src={JUNFUSUMA} />
                </div>
            </div>
        );
    }
}
