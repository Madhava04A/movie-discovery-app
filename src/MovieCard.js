import React from "react";

const MovieCard = ({ movie, isLoading, keys }) => {
  return (
    <>
      {!isLoading && (
        <article
          className="container"
          key={keys}>
          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={"N/A"}
              width="270px"
              height="270px"
              className="image"
            />
          ) : (
            <img
              src="https://via.placeholder.com/270"
              alt="N/A"
              className="image"
            />
          )}
          <div className="info-container">
            <p className="year-type-bar">
              <span className="year-type">{movie.Year}</span>
              <span className="year-type">{movie.Type}</span>
            </p>
            <p className="movie-name">{movie.Title}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default MovieCard;
