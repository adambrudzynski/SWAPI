import React from 'react';
import GetName from '../common/GetName';
import {Starship} from './types';

interface Props {
  starship: Starship;
}

export default function StarshipPage({starship}: Props) {
  return (
    <div className="details-page">
      <h1>{starship.name}</h1>
      <h5>Model: {starship.model}</h5>
      <h5>Class: {starship.starship_class}</h5>
      <h5>Manufacturer : {starship.manufacturer}</h5>
      <h5>Price: {starship.cost_in_credits} galactic credits</h5>
      <h5>Length: {starship.length} </h5>
      <h5>Crew: {starship.crew}</h5>
      <h5>Max passengers : {starship.passengers}</h5>
      <h5>Hyperdrive class: {starship.hyperdrive_rating}</h5>
      <h5>Maximum number of Megalights: {starship.MGLT}</h5>
      <h5>Cargo capacity: {starship.cargo_capacity} kilograms</h5>
      <h5>
        Pilots: <GetName type="people" link={starship.pilots} />
      </h5>
      <h5>
        Films: <GetName type="films" link={starship.films} />
      </h5>
    </div>
  );
}
