import React, {useState} from 'react';
// import PersonCard from './PersonCard';
import {Planet} from './types';
import PlanetFilter from './PlanetsFilter';
import PlanetCard from './PlanetCard';
import useFetchAll from '../hooks/useFetchAll';

const defaultFilters = {
  search: '',
  gender: '',
};

export function PlanetsList() {
  const [loading, error, planets] = useFetchAll('https://swapi.dev/api/planets/');
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Planet) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Planet) => {
    return filters.gender === '' ? element : element.diameter === filters.gender;
  };
  if (loading && planets.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <PlanetFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(planets as Planet[])
          .filter(searching)
          .filter(filtering)
          .map((planet: Planet) => {
            return <PlanetCard key={planet.name} planet={planet} />;
          })}
      </div>
    </>
  );
}
