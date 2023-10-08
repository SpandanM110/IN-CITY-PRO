// src/NewsComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsComponent.css"; // Import the CSS file

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const apiKey = "655cf0b44b9841c9b6fd80bdc8f3b87a"; // Replace with your News API key

  useEffect(() => {
    // Fetch news data when the component mounts
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-heading">Latest News</h1>
      <ul className="news-list">
        {news.map((article, index) => (
          <li key={index} className="news-item">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <h2 className="news-title">{article.title}</h2>
            <p className="news-description">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
