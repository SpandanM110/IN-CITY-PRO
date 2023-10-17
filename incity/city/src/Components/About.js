import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Testimonial from "./Testimonial";

const About = () => {
  // Define the URL of your video
  const videoUrl = "https://youtu.be/lSkOCPNfNiI?feature=shared";

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Managing and Working in a city is easy to do with INCITYPRO
        </h1>
        <p className="primary-text">
          The main ambition is to make a platform for all the city needs and the user need not to install much application, and the future is to make it the most flexible and reliable source people can access even entertainment space will be there for the users to enjoy.
        </p>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <button
            className="inline-button"
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "blue",
              outline: "none",
              border: "none",
              borderRadius: "5rem",
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "600",
              color: "white",
              transition: "0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Watch Video <BsFillPlayCircleFill style={{ marginLeft: "0.5rem" }} />
          </button>
        </a>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
