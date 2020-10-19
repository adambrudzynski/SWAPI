import React from 'react';
import {Link} from 'react-router-dom';
import { Starship } from './types';

interface PropTypes {
  starship: Starship;
}

export default function StarshipCard({starship}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/starships/${starship.name}`}>
          <h2>{starship.name}</h2>
        </Link>
        <h6>Model: {starship.model}</h6>
        <h6>Class: {starship.starship_class}</h6>
        <h6>Max passengers: {starship.passengers }</h6>
      </div>
    </div>
  );
}
