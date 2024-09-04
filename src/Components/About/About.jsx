import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an Experience Developer with over a decade of professional
              expertise in the field. Throughout my Career, I have had the
              Privilege of collaborating with prestigious organisations,
              contribute to their Success and growth....
            </p>
            my passinon for frontend development is not only reflected in my
            extensive Experience but also in the enthusiasm and dedication i
            bring to each project....
            <p></p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTMl & CSS</p> <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React</p> <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Next.js</p> <hr style={{ width: "50%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
