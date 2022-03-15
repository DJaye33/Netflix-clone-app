import React from "react";

import "../styles/Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
      const data = await response.json();
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    })();
  }, [fetchUrl]);

  function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
