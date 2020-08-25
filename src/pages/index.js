import React from "react";
import { Link } from "gatsby";

import "../scss/index.scss";

import Layout from "../components/layout";
import Header from '../components/Header';
import About from '../components/About';
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Header />
        <About />
        <SEO title="Home" />
    </Layout>
);

export default IndexPage;
