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
                    <p className="section--title">
                        About
                    </p>
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit laboriosam illo, veniam officiis voluptatum soluta, nemo dolore quas dolores in dignissimos exercitationem voluptatibus excepturi sequi adipisci esse commodi? Adipisci.
                    </p>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit laboriosam illo, veniam officiis voluptatum solut
                    </p>
                </div>
            </div>
        </section>
    )
}