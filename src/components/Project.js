import React from 'react';

export default function Project(props) {
  const { project } = props;
  return (
    <div className="project-container" >
    <img className="project-img" src={project.img} alt='project'/>
        <div className="project-content">
            <div className="project-title">{project.name}</div>
            <hr />
            <div className="project-desc">
              {project.description}
            </div>
            <div className="project-tech-container">
              {project.tech.map(tech => (
                 <div key={tech} className="project-tech">{tech}</div>
              ))}
            </div>
            <a  rel="noopener noreferrer" target="_blank" href={project.link}>
              <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                      <span className="icon arrow" />
                  </span>
                  <span className="button-text">Learn More</span>
              </button>
            </a>
        </div>
    </div>
  )
}
