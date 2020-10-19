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
      <h5>Director: {film.director}</h5>
      <h5>Episode number: {film.episode_id}</h5>
      <h5>Opening crawl: {film.opening_crawl}</h5>
      <h4>
        Characters: <GetName type="people" link={film.characters} />
      </h4>
      <h4>
        Species : <GetName type="species" link={film.species} />
      </h4>
      <h4>
        Planets: <GetName type="planets" link={film.planets} />
      </h4>
      <h4>
      Starships : <GetName type="starships" link={film.starships } />
      </h4>
      <h4>
      Vehicles : <GetName type="vehicles" link={film.vehicles } />
      </h4>
    </div>
  );
}
