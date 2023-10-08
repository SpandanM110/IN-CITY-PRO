import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';

import Footer from './Components/Footer';
import WeatherApp from './Components/WeatherApp';



function App() {
  return (
    <div className="App">
      <Home />
      <WeatherApp />

    </div>
  );
}

export default App;
