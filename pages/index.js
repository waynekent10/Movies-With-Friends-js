/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import MovieCard from '../components/MovieCard';
import getMovies from '../api/tmdb';

function Home() {
  const [movies, setMovies] = useState([]);
  const { user } = useAuth();

  const getAllMovies = () => {
    getMovies(user.uid).then(setMovies);
  };

  useEffect(() => {
    getAllMovies();
  }, [user]); // Only user should be a dependency

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* Render MovieCard component for each movie in the movies state */}
        {movies.map((movieObj) => (
          <MovieCard key={movieObj.movie_id} movieObj={movieObj} onUpdate={getAllMovies} />
        ))}
      </div>
    </div>
  );
}

export default Home;
