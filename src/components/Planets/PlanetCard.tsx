import React from 'react';
import {Link} from 'react-router-dom';
import { Planet } from './types';

interface PropTypes {
  planet: Planet;
}

export default function PersonCard({planet}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/planets/${planet.name}`}>
          <h2>{planet.name}</h2>
        </Link>
        <h6>Diameter: {planet.diameter}</h6>
        <h6>Population: {planet.population}</h6>
        <h6>Terrain: {planet.terrain}</h6>
      </div>
    </div>
  );
}
