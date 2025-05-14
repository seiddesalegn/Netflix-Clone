// src/Components/Row/Row.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css"; // We'll create the styles in the next step

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); // Store movie results
      return request;
    }
    fetchData();
  }, [fetchUrl]); // Run when fetchUrl changes

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
