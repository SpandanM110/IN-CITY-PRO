import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ChargingStationMap from './Components/ChargingStationMap';




function App() {
  return (
    <div className="App">
      <Home />
      <ChargingStationMap />
    </div>
  );
}

export default App;
