import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function AnimeItem() {
  const { id } = useParams();

  // State
  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  // Destructure anime
  const {
    title, synopsis,
    trailer, duration, aired,
    season, images, rank,
    score, scored_by, popularity,
    status, rating, source,
  } = anime;

  // Get anime based on id
  const getAnime = async (animeId) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
      if (response.ok) {
        const data = await response.json();
        setAnime(data.data);
      } else {
        console.error('Failed to fetch anime data');
      }
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }
  };

  // Get characters
  const getCharacters = async (animeId) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
      if (response.ok) {
        const data = await response.json();
        setCharacters(data.data);
      } else {
        console.error('Failed to fetch characters');
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  // Initial render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, [id]);

  return (
    <div className="anime-item">
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <div className="anime-details">
            <p><span>Aired:</span><span>{aired?.string}</span></p>
            <p><span>Rating:</span><span>{rating}</span></p>
            <p><span>Rank:</span><span>{rank}</span></p>
            <p><span>Score:</span><span>{score}</span></p>
            <p><span>Scored By:</span><span>{scored_by}</span></p>
            <p><span>Popularity:</span><span>{popularity}</span></p>
            <p><span>Status:</span><span>{status}</span></p>
            <p><span>Source:</span><span>{source}</span></p>
            <p><span>Season:</span><span>{season}</span></p>
            <p><span>Duration:</span><span>{duration}</span></p>
          </div>
        </div>
        <p className="description">
          {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
          <button onClick={() => {
            setShowMore(!showMore);
          }}>{showMore ? 'Show Less' : 'Read More'}</button>
        </p>
      </div>
      <h3 className="title">Trailer</h3>
      <div className="trailer-con">
        {trailer?.embed_url ?
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe> :
          <h3>Trailer not available</h3>
        }
      </div>
      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return <Link to={`/character/${mal_id}`} key={index}>
            <div className="character">
              <img src={images?.jpg.image_url} alt="" />
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </Link>;
        })}
      </div>
    </div>
  );
}

export default AnimeItem;
