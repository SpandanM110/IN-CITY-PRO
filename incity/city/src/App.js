import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Food from './Food';
import Entertainment from './Entertainment';
import Travel from './Travel';
import Medicine from './Medicine';
import Map from './Map';
import Property from './Property';
import Weather from './Weather';
import News from './News';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleBackButtonClick = () => {
    setActiveComponent('home'); // Set the active component to 'home' when the back button is clicked
  };

  // Inline CSS for button styles
  const buttonStyle = {
    backgroundColor: 'blue',
    color: '#fff',
    borderRadius: '25px',
    padding: '20px',
    margin: '15px',
    cursor: 'pointer',
    width: 'calc(45% - 50px)', // 4 buttons in a row
    fontSize: '18px', // Increase text size
  };

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  return (
    <div className="App">
      <div className="content">
        <div className="main-content">
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'about' && <About />}
          {activeComponent === 'work' && <Work />}
          {activeComponent === 'food' && <Food />}
          {activeComponent === 'entertainment' && <Entertainment />}
          {activeComponent === 'travel' && <Travel />}
          {activeComponent === 'medicine' && <Medicine />}
          {activeComponent === 'map' && <Map />}
          {activeComponent === 'property' && <Property />}
          {activeComponent === 'weather' && <Weather />}
          {activeComponent === 'news' && <News />}
          {activeComponent === 'testimonial' && <Testimonial />}
          {activeComponent === 'contact' && <Contact />}
        </div>

        <div className="buttons-above-footer">
          <div style={gridContainerStyle}>
            <button
              onClick={() => handleButtonClick('home')}
              style={buttonStyle}
            >
              Home
            </button>
            <button
              onClick={() => handleButtonClick('about')}
              style={buttonStyle}
            >
              About
            </button>
            <button
              onClick={() => handleButtonClick('work')}
              style={buttonStyle}
            >
              Work
            </button>
            <button
              onClick={() => handleButtonClick('food')}
              style={buttonStyle}
            >
              Food
            </button>
            <button
              onClick={() => handleButtonClick('entertainment')}
              style={buttonStyle}
            >
              Entertainment
            </button>
            <button
              onClick={() => handleButtonClick('travel')}
              style={buttonStyle}
            >
              Travel
            </button>
            <button
              onClick={() => handleButtonClick('medicine')}
              style={buttonStyle}
            >
              Medicine
            </button>
            <button
              onClick={() => handleButtonClick('map')}
              style={buttonStyle}
            >
              Map
            </button>
            <button
              onClick={() => handleButtonClick('property')}
              style={buttonStyle}
            >
              Property
            </button>
            <button
              onClick={() => handleButtonClick('weather')}
              style={buttonStyle}
            >
              Weather
            </button>
            <button
              onClick={() => handleButtonClick('news')}
              style={buttonStyle}
            >
              News
            </button>
            <button
              onClick={() => handleButtonClick('contact')}
              style={buttonStyle}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
