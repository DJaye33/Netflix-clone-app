import React from "react";

import "../styles/Row.scss";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
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
            src={`${base_Url}${movie.poster_path}`}
            alt={movie.name}
            className="row__poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
