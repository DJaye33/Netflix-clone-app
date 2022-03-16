import React from "react";

import "../styles/Row.css";

const base_Url = "https://image.tmdb.org/t/p/original/"; // For Images

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}/`);
      const data = await response.json();
      setMovies(data.results);
    })();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
