import React from 'react';
import GetName from '../common/GetName';
import {Person} from './types';

interface Props {
  person: Person;
}

export default function PersonPage({person}: Props) {
  return (
    <div className="details-page">
      <h1>{person.name}</h1>
      <h5>Height: {person.height}</h5>
      <h5>Mass: {person.mass}</h5>
      <h5>Hair color: {person.hair_color}</h5>
      <h5>Eye color: {person.eye_color}</h5>
      <h5>Birth year: {person.birth_year}</h5>
      <h5>Gender: {person.gender}</h5>
      <h4>
        Homeworld: <GetName type="planets" link={person.homeworld} />
      </h4>
      <h4>
        Films: <GetName type="films" link={person.films} />
      </h4>
      <h4>
        Species: <GetName type="species" link={person.species} />
      </h4>
      <h4>
        Vehicles: <GetName type="vehicles" link={person.vehicles} />
      </h4>
      <h4>
        Starships: <GetName type="starships" link={person.starships} />
      </h4>
    </div>
  );
}
