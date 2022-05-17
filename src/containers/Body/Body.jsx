import React from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <About />
      <Projects />
      <TechStack />
    </div>
  );
};

export default Body;
