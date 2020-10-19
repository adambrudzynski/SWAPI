import React from 'react';
import {Link} from 'react-router-dom';
import { Person } from './types';

interface PropTypes {
  person: Person;
}

export default function PersonCard({person}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/people/${person.name}`}>
          <h2>{person.name}</h2>
        </Link>
        <h6>mass: {person.mass}</h6>
        <h6>birth: {person.birth_year}</h6>
        <h6>eye color: {person.eye_color}</h6>
        <h6>gender: {person.gender}</h6>
        <h6>skin: {person.skin_color}</h6>
      </div>
    </div>
  );
}
