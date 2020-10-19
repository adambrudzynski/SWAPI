import React from 'react';
import GetName from '../common/GetName';
import {Species} from './types';

interface Props {
  species: Species;
}

export default function SpeciesPage({species}: Props) {
  return (
    <div className="details-page">
      <h1>{species.name}</h1>
      <h5>Classification: {species.classification}</h5>
      <h5>Designation: {species.designation}</h5>
      <h5>Average height: {species.average_height}</h5>
      <h5>Average lifespan: {species.average_lifespan}</h5>
      <h5>Eye colors: {species.eye_colors} </h5>
      <h5>Haircolors: {species.hair_colors}</h5>
      <h5>skin_colors: {species.skin_colors}</h5>
      <h5>language: {species.language}</h5>

      <h5>
        Homeworld : <GetName type="planets" link={species.homeworld} />
      </h5>
      <h5>
        People: <GetName type="people" link={species.people} />
      </h5>
      <h5>
        Films: <GetName type="films" link={species.films} />
      </h5>
    </div>
  );
}
