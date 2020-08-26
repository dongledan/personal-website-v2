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
                        <div className="project-tech-container">
                          <div className="project-tech">
                            Node.js
                          </div>
                          <div className="project-tech">
                            React
                          </div>
                          <div className="project-tech">
                            Redux
                          </div>
                          <div className="project-tech">
                            Express
                          </div>
                          <div className="project-tech">
                            PostGreSQL
                          </div>
                        </div>
                        <button className="learn-more">
                          <span className="circle" aria-hidden="true">
                            <span className="icon arrow" />
                          </span>
                          <span className="button-text">
                            Learn More
                          </span>
                        </button>
                    </div>
                    <img className="project-img" src={JUNFUSUMA} />
                </div>
            </div>
        );
    }
}
