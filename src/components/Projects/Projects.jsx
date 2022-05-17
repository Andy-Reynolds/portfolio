import React, { useState } from "react";
import "./Projects.scss";
import projects from "../../assets/projects/projects";
import preview from "../../assets/svgs/preview.svg";
import chevronLeft from "../../assets/svgs/chevronLeft.svg";
import chevronRight from "../../assets/svgs/chevronRight.svg";

const Projects = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === projects.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(projects.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const stackCards = projects[counter].stack.map((tool) => (
    <div className="projects__tool">{tool}</div>
  ));

  return (
    <div className="projects">
      <h3 className="projects__heading">( Projects )</h3>
      <div className="projects__tile">
        <div className="projects__tile--upper">
          <div className="projects__image-container">
            <img
              className="projects__image"
              src={projects[counter].image}
              alt={projects[counter].title}
            />
          </div>
          <div className="projects__info">
            <h4 className="projects__title">{projects[counter].title}</h4>
            <p className="projects__description">
              {projects[counter].description}
            </p>
            <div className="projects__stack-container">{stackCards}</div>
          </div>
        </div>
        <div className="projects__tile--lower">
          <button
            className="projects__arrow projects__arrow--left"
            onClick={handleDecrement}
          >
            <img className="arrow-image" src={chevronLeft} alt="left" />
          </button>
          <div className="projects__buttons-container">
            <a
              href={projects[counter].preview}
              target="_blank"
              rel="noreferrer"
              className="projects__button project__button--preview"
            >
              <img className="preview-image" src={preview} alt="preview" />{" "}
              &ensp; Preview
            </a>
            <a
              href={projects[counter].github}
              target="_blank"
              rel="noreferrer"
              className="projects__button project__button--code"
            >
              &lt;&nbsp;&gt; &nbsp; Code
            </a>
          </div>
          <button
            className="projects__arrow projects__arrow--right"
            onClick={handleIncrement}
          >
            <img className="arrow-image" src={chevronRight} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
