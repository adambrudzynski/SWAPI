import React from 'react';
import GetName from '../common/GetName';
import {Film} from './types';

interface Props {
  film: Film;
}

export default function FilmPage({film}: Props) {
  return (
    <div className="details-page">
      <h1>{film.title}</h1>
      <h4>Director: {film.director}</h4>
      <h5>Episode number: {film.episode_id}</h5>
      <h5>Opening crawl</h5> <span>{film.opening_crawl}</span>
      <h4>
        Characters: <GetName type="people" link={film.characters} />
      </h4>
      <h4>Species: </h4>
      <GetName type="species" link={film.species} />
      <h4>Planets:</h4> <GetName type="planets" link={film.planets} />
      <h4>Starships:</h4> <GetName type="starships" link={film.starships} />
      <h4>Vehicles:</h4> <GetName type="vehicles" link={film.vehicles} />
    </div>
  );
}
