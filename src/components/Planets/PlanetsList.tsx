import React, {useState} from 'react';
import {Planet} from './types';
import PlanetFilter from './PlanetsFilter';
import PlanetCard from './PlanetCard';
import useFetchAll from '../hooks/useFetchAll';
import {unique} from '../common/getDistinct'

const defaultFilters = {
  search: '',
  terrain: '',
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


  const options = unique(planets, 'terrain') 

  const searching = (element: Planet) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Planet) => {
    return filters.terrain === '' ? element : element.terrain === filters.terrain;
  };
  if (loading && planets.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <PlanetFilter
        filters={filters}
        options={options}
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
