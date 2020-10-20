import React, {useState} from 'react';
// import PersonCard from './PersonCard';
import {Starship} from './types';
import StarshipFilter from './StarshipsFilter';
import StarshipCard from './StarshipCard';
import useFetchAll from '../hooks/useFetchAll';
import { unique } from '../common/getDistinct';

const defaultFilters = {
  search: '',
  starship_class: '',
};

export function StarshipsList() {
  const [loading, error, starships] = useFetchAll('https://swapi.dev/api/starships/');
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  
  const options = unique(starships, 'starship_class')

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Starship) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Starship) => {
    return  filters.starship_class === '' ? element : element.starship_class === filters.starship_class;
  };
  if (loading && starships.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <StarshipFilter
      options={options}
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(starships as Starship[])
          .filter(searching)
          .filter(filtering)
          .map((starship: Starship) => {
            return <StarshipCard key={starship.name} starship={starship} />;
          })}
      </div>
    </>
  );
}
