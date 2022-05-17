import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h3 className="about__heading">( About me )</h3>
      <p className="about__paragraph">
        Hi, I'm Andy and I am a junior software engineer who has recently
        graduated from the _nology tech consultancy programme.
      </p>
      <br />
      <p className="about__paragraph">
        After graduating from Lancaster University with a BSc in Physics and an
        Msc in Energy and the Environment I knew that my creative and technical
        skills in problem solving were suited perfectly for a career in
        technology, and I am particularly passionate about about how it has
        affected my area of interests to improve knowledge and efficiency.
        Following a career in skydiving and I am now retraining in this field.
      </p>
      <br />
      <p className="about__paragraph">
        In my spare time I still skydive for fun and I am a keen vipassana
        meditator and lover of the outdoors.
      </p>
    </div>
  );
};

export default About;
