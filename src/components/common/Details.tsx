import React from 'react';
import {RouteProps} from 'react-router';
import PersonPage from '../People/PersonPage';
import PersonCard from '../People/PersonCard';
import PlanetPage from '../Planets/PlanetPage';
import {useFetch} from '../hooks/useFetch';
import {ApiNode} from './types';

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
        <PersonPage person={results.results[0]} />
      </>
    );
  if (results && results.count > 1) {
    return (
      <>
        There is more than one match
        {results.results.map((result: any) => {
          return <PersonCard key={result.name} person={result} />;
        })}
      </>
    );
  }
  return <> no match with your request: "{match.params.name}"</>;
}
