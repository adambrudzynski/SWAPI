import React, {useState} from 'react';
import {Species} from './types';
import SpeciesFilter from './SpeciesFilter';
import SpeciesCard from './SpeciesCard';
import useFetchAll from '../hooks/useFetchAll';

const defaultFilters = {
  search: '',
  gender: '',
};

export function SpeciessList() {
  const [loading, error, species] = useFetchAll('https://swapi.dev/api/species/');
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Species) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Species) => {
    return  element
    // filters.gender === '' ? element : element. === filters.gender;
  };
  if (loading && species.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <SpeciesFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(species as Species[])
          .filter(searching)
          .filter(filtering)
          .map((species: Species) => {
            return <SpeciesCard key={species.name} species={species} />;
          })}
      </div>
    </>
  );
}
