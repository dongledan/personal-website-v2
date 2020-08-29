import React from "react";

import "../scss/index.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/Projects";

const projects = () => (
    <Layout>
        <SEO title="Projects" />
        <Projects />
    </Layout>
);

export default projects;
