import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function App() {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1e1fff7a";
  const [title, setTitle] = useState("adventure");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function searchMovies(name) {
    const res = await fetch(`${API_URL}&s=${name}`);
    const data = await res.json();
    setMovies(data.Search);
    setTitle("");
  }

  useEffect(() => {
    searchMovies(title);
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <input
          type="text"
          placeholder="Enter Movie Name"
          className="movie-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => searchMovies(title)}>
          search
        </button>
      </nav>
      <div className="display-main-content">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            isLoading={isLoading}
            keys={movie.imdbID}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
