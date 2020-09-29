import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import "../scss/index.scss";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ColorLine from '../components/ColorLine';

export default function NotFoundPage() {
    const image = useStaticQuery(graphql`
    query {
        notFound: file(relativePath: { eq: "404.JPG" }) {
            childImageSharp {
                fluid(maxWidth: 1023) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `);

    const notFound = image.notFound.childImageSharp.fluid;

    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="notFound-container">
                <div className="header">Oops! You ended up in Iceland...</div>
                <ColorLine />
                <div className="notFound-text">Take in the sights and come back <Link className="notFound-link" to={'/'}>home</Link>.</div>
                <Img className="notFound-img" fluid={notFound} alt="404 image" />
                <div className="watermark one">error.</div>
                <div className="watermark two">404.</div>
                <div className="watermark three">page not found.</div>
            </div>
        </Layout>   
    )
};

