import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
// import DeliveryMeals from "../Assets/delivery-image.png";
import News from "../Assets/iconamoon_news-fill.png";
import Map from "../Assets/uiw_map.png"
import Medicine from "../Assets/icon-park-outline_medicine-chest.png"
import Weather from "../Assets/mdi_weather-fog.png"
import Contact from "../Assets/material-symbols_contact-mail.png"
import Entertainment from "../Assets/streamline_entertainment-play-list-3-player-television-display-movies-smartphone-media-tv-players-screen-video.png"
import House from "../Assets/cil_house.png"
// import Testimonial from "./Testimonial";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Choices",
      text: "Choose whatever the user want's to choose.",
      buttonText: "Learn More",
    },
    {
      image: PickMeals,
      title: "Meals",
      text: "Know about the details of any food or recipe the user likes. ",
      buttonText: "Learn More",
    },
    {
      image: News,
      title: "News",
      text: "Get the latest news about the city.",
      buttonText: "Learn More",
    },
    {
      image: Map,
      title: "Maps",
      text: "See any location across the city using our Map application.",
      buttonText: "Learn More",
    },
    {
      image: Medicine,
      title: "Medical Help",
      text: "Details on a particular medicine and can read some medical blogs as well. ",
      buttonText: "Learn More",
    },
    {
      image: Weather,
      title: "Weather",
      text: "Check the weather of the city.",
      buttonText: "Learn More",
    },
    {
      image: Contact,
      title: "Conenct With Us",
      text: "You can contact us for any queries.",
      buttonText: "Learn More",
    },
    {
      image: Entertainment,
      title: "Entertainment",
      text: "Entertainment is the best way to relax and enjoy. ",
      buttonText: "Learn More",
    },
    {
      image: House,
      title: "Housing",
      text: "Get information about the property in the city.",
      buttonText: "Learn More",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The INCITYPRO is designed for an overall development of the city which includes the details and insights across the city.Along with the details of the city the user can also get the details of the food, entertainment, travel, medicine, property, weather, news and contact details of the city. Here are the buttons mentioned below to use each application and details .
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button
              className="inline-button"
              style={{
                padding: "0.4rem 1rem",
                backgroundColor: "blue",
                outline: "none",
                border: "none",
                borderRadius: "5rem",
                fontSize: "0.9rem",
                cursor: "pointer",
                fontWeight: "600",
                color: "white",
                transition: "0.2s",
                marginTop: "1rem",
                width: "100%", // Ensures the button fits in the box
              }}
            >
              {data.buttonText}
            </button>
          </div>
        ))}
        <br />
      </div>
      <br />
      <br />
      {/* <Testimonial /> */}
    </div>
    
  );
};

export default Work;
