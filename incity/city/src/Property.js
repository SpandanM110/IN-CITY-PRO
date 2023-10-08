import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';

import Footer from './Components/Footer';
import RealEstateAppsGallery from './Components/RealEstateAppsGallery';

function App() {
  return (
    <div className="App">
      <Home />
      
      <RealEstateAppsGallery />
    
    </div>
  );
}

export default App;
