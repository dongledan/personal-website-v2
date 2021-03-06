import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaApple,
    FaGooglePlay,
    FaAngleUp,
} from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill";

import { scrollToTop } from "../utils";

try {
    smoothscroll.polyfill();
} catch (error) {
    console.log(error);
}

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className=" copyright-container">
                <div className="footer-copyright">
                    © {new Date().getFullYear()}{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://youtu.be/-elwQO0uusA"
                    >
                        {" "}
                        Danny Li{" "}
                    </a>{" "}
                    ✌️
                </div>
                <div className="divider">{"\xa0"}</div>
                <div className="footer-social-container">
                    <a
                        className="footer-social mail"
                        href="mailto:dli0906@gmail.com"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        className="footer-social linkedin"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/d-li"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        className="footer-social github"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/dongledan"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="footer-social google"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://play.google.com/store/apps/developer?id=dongledan&hl=en_US"
                    >
                        <FaGooglePlay />
                    </a>
                    <a
                        className="footer-social apple"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://apps.apple.com/us/developer/danny-li/id1509374209"
                    >
                        <FaApple />
                    </a>
                </div>
            </div>
            <div className="back-to-top-container">
                <a className="back-to-top" onClick={() => scrollToTop()}>
                    <div className="arrow">
                        <FaAngleUp />
                    </div>
                    Back to top
                </a>
            </div>
        </footer>
    );
}
