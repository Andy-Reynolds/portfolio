import React from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <About />
      <Projects />
    </div>
  );
};

export default Body;
