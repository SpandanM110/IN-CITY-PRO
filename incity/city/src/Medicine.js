import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';
import MyHealthFinderWidget from './Components/MyHealthFinderWidget';
import FoodComposition from './Components/FoodComposition';




function App() {
  return (
    <div className="App">
      <Home />

      <br />

      
      <FoodComposition />
      <br />
      <MyHealthFinderWidget />

    </div>
  );
}

export default App;
