import React from "react";
import "./TechStack.scss";
import html from "../../assets/svgs/techIcons/html.svg";
import css from "../../assets/svgs/techIcons/css.svg";
import scss from "../../assets/svgs/techIcons/scss.svg";
import javascript from "../../assets/svgs/techIcons/javascript.svg";
import react from "../../assets/svgs/techIcons/react.svg";
import npm from "../../assets/svgs/techIcons/npm.svg";
import jest from "../../assets/svgs/techIcons/jest.svg";
import cypress from "../../assets/svgs/techIcons/cypress.svg";
import java from "../../assets/svgs/techIcons/java.svg";
import spring from "../../assets/svgs/techIcons/spring.svg";
import mysql from "../../assets/svgs/techIcons/mysql.svg";
import cloud from "../../assets/svgs/techIcons/cloud.svg";
import postman from "../../assets/svgs/techIcons/postman.svg";
import figma from "../../assets/svgs/techIcons/figma.svg";

const TechStack = () => {
  const techStackArray = [
    {
      import: html,
      string: "HTML",
    },
    {
      import: css,
      string: "CSS",
    },
    {
      import: scss,
      string: "SCSS",
    },
    {
      import: javascript,
      string: "Javascript",
    },
    {
      import: react,
      string: "React",
    },
    {
      import: npm,
      string: "npm",
    },
    {
      import: jest,
      string: "Jest",
    },
    {
      import: cypress,
      string: "Cypress",
    },
    {
      import: java,
      string: "Java",
    },
    {
      import: spring,
      string: "Spring",
    },
    {
      import: mysql,
      string: "MySQL",
    },
    {
      import: cloud,
      string: "Google Cloud",
    },
    {
      import: postman,
      string: "Postman",
    },
    {
      import: figma,
      string: "Figma",
    },
  ];

  const icons = techStackArray.map((tool) => (
    <div className="tech-stack__icon-container">
      <img className="tech-stack__icon" src={tool.import} alt={tool.string} />
      <p className="tech-stack__icon-label">{tool.string}</p>
    </div>
  ));

  return (
    <div className="tech-stack">
      <h3 className="tech-stack__heading">( Tech Stack )</h3>
      <div className="tech-stack__icons">{icons}</div>
    </div>
  );
};

export default TechStack;
