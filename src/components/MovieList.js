import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
