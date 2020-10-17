import React, {useEffect, useState} from 'react';
import {RouteProps} from 'react-router';
import PersonPage from './PersonPage';
import PersonCard from './PersonCard';
import {apiResponse} from './PeopleList';

interface RouteInfo extends RouteProps {
  params: {
    name: string;
  };
}
export default function PersonDetails({match}: {match: RouteInfo}) {
  const [results, setresults] = useState<apiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPerson(match.params.name);
  }, [match.params.name]);

  const fetchPerson = async (name: string) => {
    try {
      setLoading(true);
      const resultsData = await fetch(
        `https://swapi.dev/api/people/?search=${name}`
      );
      const data = await resultsData.json();
      setresults(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) return <>Loading...</>;
  if (error) return <>"Error occured, try again"</>;
  if (results && results.count === 1) return <PersonPage person={results.results[0]}/>
  if (results && results.count > 1) {
    return (
      <>
      There is more than one match
        {results.results.map((person) => {
          return <PersonCard key={person.name} person={person} />;
        })}
      </>
    );
  }
  return <> no match with your request: "{match.params.name}"</>;
}
