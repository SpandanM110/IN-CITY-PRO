import React, { useState, useEffect } from 'react';

const FoodComposition = () => {
  const apiKey = 'S7bdnaj6FJkyR4R18brACgNwHc5LCUF6hhaGaONF'; // Your API key

  const [foodName, setFoodName] = useState('');
  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      if (foodName === '') {
        setFoodDetails(null);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(
            foodName
          )}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        // Assuming the first item in the search results is the desired food item
        const foodItem = data.foods[0];
        setFoodDetails(foodItem);
      } catch (error) {
        console.error(error);
        setFoodDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, [foodName, apiKey]);

  const handleInputChange = (event) => {
    setFoodName(event.target.value);
  };

  return (
    <div>
      <h2>Food Composition Details</h2>
      <input
        type="text"
        placeholder="Enter a food name"
        value={foodName}
        onChange={handleInputChange}
      />
      {loading && <p>Loading...</p>}
      {foodDetails && (
        <div>
          <h3>{foodDetails.description}</h3>
          <ul>
            {foodDetails.foodNutrients.map((nutrient) => (
              <li key={nutrient.nutrientId}>
                {nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodComposition;
