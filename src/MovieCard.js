import React from "react";

const MovieCard = ({ movie, isLoading, keys }) => {
  return (
    <>
      {isLoading && (
        <main
          className="container"
          keys={keys}>
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
          {movie.Title ? (
            <>
              <div className="info-container">
                <p className="year-type-bar">
                  <span className="year-type">{movie.Year}</span>
                  <span className="year-type">{movie.Type}</span>
                </p>
                <p className="movie-name">{movie.Title}</p>
              </div>
            </>
          ) : (
            <div className="alt-loading">...Loading</div>
          )}
        </main>
      )}
    </>
  );
};

export default MovieCard;
