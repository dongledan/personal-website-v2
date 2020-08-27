/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import { scrollToTop } from "../utils";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 1060,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer className="footer-container">
                    © {new Date().getFullYear()} Danny Li
                    {` `}
                    <a className="back-to-top" onClick={() => scrollToTop()}>
                        Back to top
                    </a>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
