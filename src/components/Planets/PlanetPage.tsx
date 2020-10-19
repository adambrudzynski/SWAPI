import React from 'react';
import GetName from '../common/GetName';
import { Planet } from './types';

interface Props {
  planet: Planet;
}

export default function PersonPage({planet}: Props) {
 
  return (
    <div className='details-page'>
      <h1>{planet.name}</h1>
      <h5>Diameter: {planet.diameter}</h5>
      <h5>Orbital period: {planet.orbital_period}</h5>
      <h5>Rotation period: {planet.rotation_period}</h5>
      <h5>Gravity: {planet.gravity}</h5>
      <h5>Climate: {planet.climate}</h5>
      <h5>Terrain: {planet.terrain}</h5>
      <h5>Surface Water: {planet.surface_water}</h5>
      <h5>Population: {planet.population}</h5>
      <h4>
        Residents: <GetName type="people" link={planet.residents} />
      </h4>
      <h4>
        Films: <GetName type="films" link={planet.films} />
      </h4>
    </div>
  );
}
