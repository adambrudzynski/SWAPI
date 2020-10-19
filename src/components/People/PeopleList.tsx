import React, {useEffect, useState} from 'react';
import PersonCard from './PersonCard';
import {apiResponse, Person} from './types';
import PeopleFilter from './PeopleFilter';

const defaultFilters = {
  search: '',
  gender: '',
};

export function PeopleList() {
  const [people, setPeople] = useState<Person[]>([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetcher('https://swapi.dev/api/people/');
  }, []);

  let results: Person[] = [];
  const fetcher = (url: string) => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json: apiResponse) {
        results.push(...json.results);
        setPeople(results);
        if (json.next) {
          fetcher(json.next);
        }
        if (!json.next) {
          setPeople(results);
          setLoading(false);
        }
      })
      .catch(function (err) {
        setError(true);
      });
  };

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Person) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Person) => {
    return filters.gender === ''
      ? element
      : element.gender === filters.gender;
  };
  if (loading && people.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <PeopleFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(people as Person[])
          .filter(searching)
          .filter(filtering)
          .map((person: Person) => {
            return <PersonCard key={person.name} person={person} />;
          })}
      </div>
    </>
  );
}
