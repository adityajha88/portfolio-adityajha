import React from "react";
import Lottie from "lottie-react";

import Animation2 from "../../lottie/Animation2.json";

export default function AboutMe(){
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                {/* <img src="./img/about-me.png" alt="About Me" /> */}
                <Lottie animationData={Animation2} />
            </div>
            <div className="heo--section--content--box about--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">
                        About
                    </p> */}
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                        I'm a passionate full-stack web developer with more than a year of experience.
                    </p>
                    <p className="hero--section--description">
                        Throughout my career journey, I've had the privilege of creating user-friendly websites and collaborating closely with development teams to address client requirements effectively.
                    </p>
                </div>
            </div>
        </section>
    )
}