import React from 'react';
import {Link} from 'react-router-dom';
import { Film } from './types';

interface PropTypes {
  film: Film;
}

export default function FilmCard({film}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/films/${film.title}`}>
          <h2>{film.title}</h2>
        </Link>
        <h6> Episode number: {film.episode_id}</h6>
        <h6>Director: {film.director}</h6>
        <h6>Producer: {film.producer}</h6>
      </div>
    </div>
  );
}
