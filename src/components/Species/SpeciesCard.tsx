import React from 'react';
import {Link} from 'react-router-dom';
import {Species} from './types';

interface PropTypes {
  species: Species;
}

export default function SpeciesCard({species}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/species/${species.name}`}>
          <h2>{species.name}</h2>
        </Link>
        <h6>Classification: {species.classification}</h6>
        <h6>Designation: {species.designation}</h6>
      </div>
    </div>
  );
}
