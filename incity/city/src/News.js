import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import PodcastEmbed from './Components/PodcastEmbed';
import NewsComponent from './Components/NewsComponent';




function App() {
  return (
    <div className="App">
      <Home />
   
   
      <NewsComponent /> 
     
    </div>
  );
}

export default App;
