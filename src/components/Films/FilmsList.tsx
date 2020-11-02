import React, {useEffect, useRef, useState} from 'react';
import {Film} from './types';
import FilmFilter from './FilmsFilter';
import FilmCard from './FilmCard';
import {useDispatch, useSelector} from 'react-redux';
import useLoadMore from '../hooks/useLoadMore';
import {fetchData} from '../redux/api/apiActions';
import {IRootState} from '../redux/rootReducer';

const defaultFilters = {
  search: '',
  gender: '',
};

export function FilmsList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Film[]>(({films}) => films.data);
  const nextURL = useSelector<IRootState, string | null>(({films}) => films.nextURL);
  const loading = useSelector<IRootState, boolean>(({films}) => films.loading);
  const error = useSelector<IRootState, boolean>(({films}) => films.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'FILMS', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/films/', 'FILMS'));
  }, []);

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
    return filters.gender === ''
      ? element
      : element.director === filters.gender;
  };
  
  return (
    <>
      <FilmFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {list && (list as Film[])
          .filter(searching)
          .filter(filtering)
          .map((film: Film) => {
            return <FilmCard key={film.title} film={film} />;
          })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
