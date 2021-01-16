import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Project(props) {
    const { project, i } = props;
    const data = useStaticQuery(graphql`
        query {
            junfusuma: file(relativePath: { eq: "JUNFUSUMA.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mtalens: file(relativePath: { eq: "MTALens.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            barisloaded: file(relativePath: { eq: "BarIsLoaded.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            griffin: file(relativePath: { eq: "Griffin.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            covid: file(relativePath: { eq: "Covid.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1023) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const junfusuma = data.junfusuma.childImageSharp.fluid;
    const mtalens = data.mtalens.childImageSharp.fluid;
    const barisloaded = data.barisloaded.childImageSharp.fluid;
    const griffin = data.griffin.childImageSharp.fluid;
    const covid = data.covid.childImageSharp.fluid;

    const images = [covid, junfusuma, mtalens, barisloaded, griffin];
    return (
        <div
            className="project-container"
            style={{ flexDirection: i % 2 ? "row-reverse" : "row" }}
        >
            <div className="project-watermark">{project.name}.</div>
            <Img
                className="project-img"
                fluid={images[project.img]}
                alt="project"
            />
            <div className="project-content">
                <div className="project-title-line" />
                <div className="project-title">{project.name}</div>
                <div className="project-desc">{project.description}</div>
                <div className="project-tech-container">
                    {project.tech.map(tech => (
                        <div key={tech} className="project-tech">
                            <span className="hashtag">#</span> {tech}
                        </div>
                    ))}
                </div>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.link}
                    className="project-link"
                >
                    <button
                        className="learn-more"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.link}
                    >
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow" />
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </a>
            </div>
        </div>
    );
}
