import React from "react";
import "./Hero.css";
import profile from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Azher Mahmood,</span> Frontend Developer based in India..
      </h1>
      <p>
        I am a Frontend Developer from Bihar, India with 10 years of experience
        in multiple companies like Microsoft, Apple, Amazon..{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume </div>
      </div>
    </div>
  );
};

export default Hero;
