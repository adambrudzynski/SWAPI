import React, {useEffect, useRef, useState} from 'react';
import {Starship} from './types';
import StarshipFilter from './StarshipsFilter';
import StarshipCard from './StarshipCard';
import { unique } from '../common/getDistinct';
import { fetchData } from '../redux/api/apiActions';
import useLoadMore from '../hooks/useLoadMore';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';

const defaultFilters = {
  search: '',
  starship_class: '',
};

export function StarshipsList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Starship[]>(({starships}) => starships.data);
  const nextURL = useSelector<IRootState, string | null>(({starships}) => starships.nextURL);
  const loading = useSelector<IRootState, boolean>(({starships}) => starships.loading);
  const error = useSelector<IRootState, boolean>(({starships}) => starships.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'STARSHIPS', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/starships/', 'STARSHIPS'));
  }, [dispatch, list]);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  
  const options = unique(list, 'starship_class')

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Starship) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Starship) => {
    return  filters.starship_class === '' ? element : element.starship_class === filters.starship_class;
  };
  return (
    <>
      <StarshipFilter
      options={options}
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {list && (list as Starship[])
          .filter(searching)
          .filter(filtering)
          .map((starship: Starship) => {
            return <StarshipCard key={starship.name} starship={starship} />;
          })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
