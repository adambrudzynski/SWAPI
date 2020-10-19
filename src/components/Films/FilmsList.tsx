import React, {useState} from 'react';
import {Film} from './types';
import FilmFilter from './FilmsFilter';
import FilmCard from './FilmCard';
import useFetchAll from '../hooks/useFetchAll';

const defaultFilters = {
  search: '',
  gender: '',
};

export function FilmsList() {
  const [loading, error, films] = useFetchAll('https://swapi.dev/api/films/');
  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Film) => {
    return element.title.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Film) => {
    return filters.gender === '' ? element : element.director === filters.gender;
  };
  if (loading && films.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <FilmFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(films as Film[])
          .filter(searching)
          .filter(filtering)
          .map((film: Film) => {
            return <FilmCard key={film.title} film={film} />;
          })}
      </div>
    </>
  );
}
