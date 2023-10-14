import React from "react";
import Lottie from "lottie-react";

import Animation1 from "../../lottie/Animation1.json";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content">
        <div className="hero--section--content">
          <p className="section--title">Hey, I`m Aditya</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
            A passionate full-stack web developer with more than a year of experience.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <Lottie animationData={Animation1} />
      </div>
    </section>
  );
}
