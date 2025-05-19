import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //array of movies
  const [trailerUrl, setTrailerUrl] = useState(""); //YouTube video-ID to play

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //HTTP GET request (with Axios) to the TMDb endpoint stored in fetchUrl.z call is awaited, so JS. pauses inside fetchData until the response arrives.
      setMovies(request.data.results); //Extract array of movie objects returned by TMDb
    }
    fetchData();
    //executs the fetching logic inside z effect ,W-out calling fetchData(), nothing happens.
  }, [fetchUrl]);
  //control how often and when z entire effect (incl fetchData()) runs.Without [fetchUrl], the effect would run every render, causing repeated fetches.

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // If already open, close it
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v")); // get YouTube video ID
        })
        .catch((error) => {
          console.log("No trailer found:", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* Trailer shows below row */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
