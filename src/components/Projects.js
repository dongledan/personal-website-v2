import React, { Component } from "react";

import {projects} from '../content/projectContent';
import ColorLine from "./ColorLine";
import Project from './Project';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="header">Projects</div>
                <ColorLine />
                {projects.map(project => (
                  <Project project={project} />
                ))}
            </div>
        );
    }
}
