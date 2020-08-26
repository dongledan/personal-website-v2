import React, { Component } from "react";

import { currConsoleDate } from "../utils";
import { aboutMe } from "../content/aboutContent";

const contacts = [
    <a href="mailto:dli0906@gmail.com">dli0906@gmail.com</a>,
    <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/d-li"
    >
        linkedIn
    </a>,
    <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/dongledan"
    >
        github
    </a>,
];

const resume = [
    <a href="DannyLi_Resume.pdf" target="_blank" rel="noopener">
        DannyLi_Resume.pdf
    </a>,
];

export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="console">
                    <div className="dots-container">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="console-header">
                            Danny—{currConsoleDate}—About
                        </div>
                    </div>
                    <div className="text">
                    <div>{`>> Danny.contactInfo`}</div>
                        <div className="array-container output-text">
                            [{"\xa0"}
                            {contacts.map((link, i) => (
                                <div>
                                    "{link}"
                                    {i === contacts.length - 1 ? "" : ",\xa0"}{" "}
                                </div>
                            ))}{"\xa0"}
                            ]
                        </div>
                        <div>{`>> Danny.resume`}</div>
                        <div className="output-text">"{resume}"</div>
                        {aboutMe.map(info => (
                            <div key={info.ouput}>
                                <div>{`>> ${info.input}`}</div>
                                <div className="output-text">{`${info.output}`}</div>
                            </div>
                        ))}
                      
                        <div className="array-container">
                            {" "}
                            {">>"}
                            <div className="cursor">{"\xa0|"}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
