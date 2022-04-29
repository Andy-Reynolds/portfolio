// import React, { useState } from "react";
import "./Projects.scss";
import projects from "../../assets/projects/projects";

const Projects = () => {
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   if (counter === projects.length - 1) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // };

  // const handleDecrement = () => {
  //   if (counter === 0) {
  //     setCounter(projects.length - 1);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };

  const stackCards = projects[0].stack.map((tool) => <div>{tool}</div>);

  console.log(stackCards);

  return (
    <div className="projects">
      <h3 className="projects__heading">( Projects )</h3>
      <div className="projects__tile">
        <div className="projects__tile--upper">
          <div className="projects__image">Image</div>
          <div className="projects__info">
            <h4 className="projects__title">Project Title</h4>
            <p className="projects__description">Project Description</p>
            <div className="projects__stack">Stack {stackCards}</div>
          </div>
        </div>
        <div className="projects__tile--lower">
          <button className="projects__arrow projects__arrow--left">
            Left
          </button>
          <div className="projects__buttons-container">
            <button className="projects__button project__button--preview">
              Preview
            </button>
            <button className="projects__button project__button--code">
              Code
            </button>
          </div>
          <button className="projects__arrow projects__arrow--right">
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
