import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const rawData = await fetch('http://localhost:8080/cinema/movies');
      const res = await rawData.json();
      console.log(res);
      setMovies(res);
    };
    getMovies();
  }, []);

  return (
    <div>
      {movies.length &&
        movies.map((movie) => {
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <h3>Directed and produced by: {movie.director}</h3>
            <p>Year produced: {movie.year}</p>
          </div>;
        })}
    </div>
  );
};

export default Movies;
