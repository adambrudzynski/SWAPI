import React, {useState} from 'react';
import PersonCard from './PersonCard';
import {Person} from './types';
import PeopleFilter from './PeopleFilter';
import useFetchAll from '../hooks/useFetchAll';

const defaultFilters = {
  search: '',
  gender: '',
};

export function PeopleList() {
  const [loading, error, people] = useFetchAll('https://swapi.dev/api/people/');
  const [filters, setFilters] = useState(defaultFilters);

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
    return filters.gender === '' ? element : element.gender === filters.gender;
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
