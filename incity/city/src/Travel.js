import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';
import Footer from './Components/Footer';
import TravelAppGallery from './Components/TravelAppGallery';



function App() {
  return (
    <div className="App">
      <Home />
      
      <TravelAppGallery />
  
    </div>
  );
}

export default App;
