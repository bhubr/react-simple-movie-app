import React from 'react';
import isLessThanOneYear from '../helpers/isLessThanOneYear';
import './Movie.css';

function Movie({ movie }) {
  const { title, picture, release } = movie;
  const isNew = isLessThanOneYear(release);
  return (
    <div className="Movie">
      {isNew && <div className="Movie-new">New</div>}
      <img src={picture} alt={title} />
      <h3>{title}</h3>
      <span>&#9733;</span>
    </div>
  );
}

export default Movie;
