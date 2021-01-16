import React, { Component } from "react";

import { projects } from "../../content/projectContent";
import ColorLine from "../ColorLine";
import Project from "./Project";
import Tags from "./Tags";

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            myProjects: projects,
            currTag: "",
            background: "",
            text: "",
            darkMode: "",
        };
        this.clickTag = this.clickTag.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.darkMode !== localStorage.darkMode) {
            const background =
                localStorage.darkMode === "true" ? `#D5A98D` : `#CE7483`;
            const text =
                localStorage.darkMode === "true" ? `#22282F` : `#E4E4E4`;
            this.setState({
                background,
                darkMode: localStorage.darkMode,
                text,
            });
        }
    }

    clickTag(tag) {
        let selectedProjects = [];

        if (tag === "All") selectedProjects = projects;
        else {
            for (let i = 0; i < projects.length; i++) {
                const currProject = projects[i];

                for (let j = 0; j < currProject.tech.length; j++) {
                    const currTech = currProject.tech[j];
                    if (currTech === tag) {
                        selectedProjects.push(currProject);
                        break;
                    }
                }
            }
        }

        this.setState({ myProjects: selectedProjects, currTag: tag });
    }
    render() {
        const { myProjects, currTag, background, text } = this.state;

        return (
            <div className="projects-container">
                <div className="header">Projects</div>
                <ColorLine />
                <Tags
                    clickTag={this.clickTag}
                    currTag={currTag}
                    background={background}
                    text={text}
                />
                {myProjects.map((project, i) => (
                    <Project project={project} key={project.name} i={i} />
                ))}
            </div>
        );
    }
}
