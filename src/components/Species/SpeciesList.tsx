import React, {useState} from 'react';
import {Species} from './types';
import SpeciesFilter from './SpeciesFilter';
import SpeciesCard from './SpeciesCard';
import useFetchAll from '../hooks/useFetchAll';
import { unique } from '../common/getDistinct';

const defaultFilters = {
  search: '',
  classification : '',
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

  const options = unique(species, 'classification') 

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Species) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Species) => {
    return  filters.classification === '' ? element : element.classification === filters.classification;
  };
  if (loading && species.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <SpeciesFilter
        filters={filters}
        options={options}
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
