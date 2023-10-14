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
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            dicta porro perferendis veritatis?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        {/* <img src="./img/hero_img.png" alt="Hero Section"/> */}
        {/* <Lottie options={defaultOptions} height={400} width={400}/> */}
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        <Lottie animationData={Animation1} />
      </div>
    </section>
  );
}
