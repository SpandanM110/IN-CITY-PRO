import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  searchContainer: {
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    fontSize: '1.3rem',
    padding: '0.5rem 1rem',
    flex: '1',
    border: 'none',
    outline: 'none',
  },
  resultsContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  resultItem: {
    flex: '0.9',
    margin: '1rem',
    backgroundColor: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '1rem',
    color: '#505050',
  },
  resultImage: {
    maxWidth: '100%',
  },
  resultTitle: {
    fontWeight: '700',
    color: 'blue',
    fontSize: '1.55rem',
    margin: '1rem 0',
  },
  resultCategory: {
    margin: '1rem 0',
  },
  videoContainer: {
    marginTop: '2rem',
  },
  videoEmbed: {
    width: '100%',
    height: '400px',
  },
};

function MealSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (query) {
      setLoading(true);

      // Fetch meals based on the search query
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => {
          setResults(response.data.meals || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div style={styles.searchContainer}>
      <h2>Meal Search</h2>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={query}
        onChange={handleInputChange}
        style={styles.input}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.resultsContainer}>
          {results.map((meal) => (
            <div key={meal.idMeal} style={styles.resultItem} onClick={() => handleMealClick(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} style={styles.resultImage} />
              <h3 style={styles.resultTitle}>{meal.strMeal}</h3>
              <p style={styles.resultCategory}>Category: {meal.strCategory}</p>
            </div>
          ))}
        </div>
      )}
      {selectedMeal && (
        <div>
          <h2>{selectedMeal.strMeal}</h2>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={styles.resultImage} />
          <p>{selectedMeal.strInstructions}</p>
          {selectedMeal.strYoutube && (
            <div style={styles.videoContainer}>
              <iframe
                title={selectedMeal.strMeal}
                src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.slice(-11)}`}
                frameBorder="0"
                allowFullScreen
                style={styles.videoEmbed}
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MealSearch;
