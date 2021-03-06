import React, { Component } from "react";

import { currConsoleDate } from "../utils";
import { aboutMe } from "../content/aboutContent";

export default class About extends Component {
    render() {
        return (
            <>
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
                        <div className="input-text">{`>> Danny.contactInfo`}</div>
                        <div className="array-container output-text">
                            [{"\xa0"}
                            {"\xa0"}
                            {contacts.map((link, i) => (
                                <div key={i}>
                                    "{link}"
                                    {i === contacts.length - 1 ? "" : ",\xa0"}
                                </div>
                            ))}
                            {"\xa0"}
                            {"\xa0"}]
                        </div>
                        <div className="input-text">{`>> Danny.resume`}</div>
                        <div className="output-text">"{resume}"</div>
                        {aboutMe.map((info, i) => (
                            <div key={i}>
                                <div className="input-text">{`>> ${info.input}`}</div>
                                <div
                                    className={`output-text ${
                                        info.output === "\xa0true"
                                            ? "boolean-text"
                                            : ""
                                    }`}
                                >
                                    {info.output}
                                </div>
                            </div>
                        ))}

                        <div className="array-container">
                            {" "}
                            {">>"}
                            <div className="cursor">{"\xa0|"}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const contacts = [
    <a className="about-link" href="mailto:dli0906@gmail.com">
        dli0906@gmail.com
    </a>,
    <a
        className="about-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/d-li"
    >
        linkedIn
    </a>,
    <a
        className="about-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/dongledan"
    >
        github
    </a>,
];

const resume = [
    <a
        className="about-link"
        href="DannyLi_Resume.pdf"
        target="_blank"
        rel="noopener"
    >
        DannyLi_Resume.pdf
    </a>,
];
