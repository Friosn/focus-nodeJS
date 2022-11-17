import React from 'react';
import { useEffect, useState } from 'react';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const getDirectors = async () => {
      const rawData = await fetch('http://localhost:8080/cinema/directors');
      const res = await rawData.json();
      console.log(res);
      setDirectors(res);
    };
    getDirectors();
  }, []);

  return (
    <div>
      {directors.length &&
        directors.map((director) => (
          <div key={director._id}>
            <h2>{director.name}</h2>
            <h3>Directed and produced by: {director.movie}</h3>
            <p>Year produced: {director.year}</p>
          </div>
        ))}
    </div>
  );
};

export default Directors;
