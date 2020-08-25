import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/Projects";

const projects = () => (
    <Layout>
        <SEO title="Projects" />
        <Projects />
        <Link className="link" to="/">
            Go back to the homepage
        </Link>
    </Layout>
);

export default projects;
