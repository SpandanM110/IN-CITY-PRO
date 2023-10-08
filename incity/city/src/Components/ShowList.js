import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [displayedShows, setDisplayedShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const showsPerRow = 9; // Number of shows to display at a time

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TVMaze API key
    const apiKey = '7Lq615vVgnLDip67U-hHstg-VJwZEkEJ';

    // Make a GET request to the TVMaze API to fetch a list of shows
    axios
      .get(`https://api.tvmaze.com/shows`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Update the 'shows' state with the fetched data
        setShows(response.data);
        // Initially, display the first set of shows
        setDisplayedShows(response.data.slice(0, showsPerRow));
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleShowClick = (show) => {
    // Set the selected show to display more details
    setSelectedShow(show);
  };

  const handleCloseDetails = () => {
    // Close the show details section
    setSelectedShow(null);
  };

  const galleryStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  const cardStyles = {
    width: '300px',
    margin: '16px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const linkStyles = {
    marginTop: '16px',
    display: 'block',
    color: '#007BFF',
    textDecoration: 'none',
  };

  return (
    <div>
      <h1>Existing Shows and Movies</h1>
      <div style={galleryStyles}>
        {displayedShows.map((show) => (
          <div
            key={show.id}
            style={cardStyles}
          >
            <img
              src={show.image.medium}
              alt={show.name}
              style={{ maxWidth: '100%' }}
              onClick={() => handleShowClick(show)}
            />
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>

      {selectedShow && (
        <div className="show-details">
          <h2>{selectedShow.name}</h2>
          <img
            src={selectedShow.image.original}
            alt={selectedShow.name}
            style={{ maxWidth: '100%' }}
          />
          <p>{selectedShow.summary.replace(/<[^>]+>/g, '')}</p>
          <a href="#" style={linkStyles} onClick={handleCloseDetails}>
            Close
          </a>
        </div>
      )}
    </div>
  );
};

export default ShowList;
