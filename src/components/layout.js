import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Footer from "./Footer";

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
                <Footer />
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
