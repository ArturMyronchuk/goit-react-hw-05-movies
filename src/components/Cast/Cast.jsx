import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const Cast = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDVkNWI0NDRjNmE4OGRjMzhjNzFjNDk4NjkwOGJmOCIsInN1YiI6IjY0ZDRhMTUwZDEwMGI2MDBjNWNmYTc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN_XdkYxFImA0SoU4WlFVfk3cEJmjoUrVEqps9KaPM0',
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          options
        );
        const data = await response.json();
        setCast(data.cast);
        // console.log(data.cast);
      } catch (err) {
        console.error(err);
      }
    };

    Cast();
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map(char => {
          return (
            <li key={char.id}>
              {/* <img src={`https://image.tmdb.org/t/p/${char.profile_path}`} alt="Ups, something is wrong" /> */}
              <p>{char.name}</p>
              <p>Character: {char.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cast;
