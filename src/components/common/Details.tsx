import React from 'react';
import {RouteProps} from 'react-router';
import PersonPage from '../People/PersonPage';
import PersonCard from '../People/PersonCard';
import PlanetPage from '../Planets/PlanetPage';
import PlanetCard from '../Planets/PlanetCard';
import {useFetch} from '../hooks/useFetch';
import {ApiNode, Person} from './types';
import FilmPage from '../Films/FilmPage';
import StarshipPage from '../Starships/StarshipPage';
import VehiclePage from '../Vehicles/VehiclePage';
import SpeciesPage from '../Species/SpeciesPage';
import {Planet} from '../Planets/types';
import {Film} from '../Films/types';
import FilmCard from '../Films/FilmCard';
import StarshipCard from '../Starships/StarshipCard';
import VehicleCard from '../Vehicles/VehicleCard';
import SpeciesCard from '../Species/SpeciesCard';
import {Species} from '../Species/types';
import {Vehicle} from '../Vehicles/types';
import {Starship} from '../Starships/types';

interface RouteInfo extends RouteProps {
  params: {
    name: string;
  };
}

export default function Details({
  match,
  apiNode,
}: {
  match: RouteInfo;
  apiNode: ApiNode;
}) {
  const [loading, error, results] = useFetch(
    `https://swapi.dev/api/${apiNode}/?search=${match.params.name}`
  );

  if (loading) return <>Loading...</>;
  if (error) return <>"Error occured, try again"</>;
  if (results && results.count === 1)
    return (
      <>
        {apiNode === 'planets' && <PlanetPage planet={results.results[0]} />}
        {apiNode === 'films' && <FilmPage film={results.results[0]} />}
        {apiNode === 'starships' && (
          <StarshipPage starship={results.results[0]} />
        )}
        {apiNode === 'vehicles' && <VehiclePage vehicle={results.results[0]} />}
        {apiNode === 'species' && <SpeciesPage species={results.results[0]} />}
        {apiNode === 'people' && <PersonPage person={results.results[0]} />}
      </>
    );
  if (results && results.count > 1) {
    return (
      <>
        There is more than one match
        <div className="list-container">
          {apiNode === 'planets' &&
            results.results.map((result: Planet) => {
              return <PlanetCard key={result.name} planet={result} />;
            })}
          {apiNode === 'films' &&
            results.results.map((result: Film) => {
              return <FilmCard key={result.title} film={result} />;
            })}
          {apiNode === 'starships' &&
            results.results.map((result: Starship) => {
              return <StarshipCard key={result.name} starship={result} />;
            })}
          {apiNode === 'vehicles' &&
            results.results.map((result: Vehicle) => {
              return <VehicleCard key={result.name} vehicle={result} />;
            })}
          {apiNode === 'species' &&
            results.results.map((result: Species) => {
              return <SpeciesCard key={result.name} species={result} />;
            })}
          {apiNode === 'people' &&
            results.results.map((result: Person) => {
              return <PersonCard key={result.name} person={result} />;
            })}
        </div>
      </>
    );
  }
  return <> no match with your request: "{match.params.name}"</>;
}
