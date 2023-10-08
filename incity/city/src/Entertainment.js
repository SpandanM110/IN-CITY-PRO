import React from 'react';
import './App.css'; // Import your CSS file if needed
import Home from './Components/Home';
import PodcastEmbed from './Components/PodcastEmbed';
import Footer from './Components/Footer';

import InternetArchiveEmbed from './Components/InternetArchiveEmbed';
import ShowList from './Components/ShowList';



function App() {
  return (
    <div className="App">
      <Home />
      <PodcastEmbed />
       
      <InternetArchiveEmbed />
      <ShowList />
      
     
    </div>
  );
}

export default App;
