import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export default instance;
//Bring Axios library for making HTTP requests that handles JSON, errors, and query-strings more cleanly than fetch().
//Axios rejects the promise for both network errors and HTTP-status errors (status ≥ 400).
//ye movie data basen ena yegna api bematamer bekelalu leloch app movie fetch endiadergu yadergenal.
