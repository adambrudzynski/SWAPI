import React, {useEffect, useRef, useState} from 'react';
import {Planet} from './types';
import PlanetFilter from './PlanetsFilter';
import PlanetCard from './PlanetCard';
import {unique} from '../common/getDistinct';
import {fetchData} from '../redux/api/apiActions';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../redux/rootReducer';
import useLoadMore from '../hooks/useLoadMore';

const defaultFilters = {
  search: '',
  terrain: '',
};

export function PlanetsList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Planet[]>(({planets}) => planets.data);
  const nextURL = useSelector<IRootState, string | null>(({planets}) => planets.nextURL);
  const loading = useSelector<IRootState, boolean>(({planets}) => planets.loading);
  const error = useSelector<IRootState, boolean>(({planets}) => planets.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'PLANETS', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/planets/', 'PLANETS'));
  }, []);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const options = unique(list, 'terrain');

  const searching = (element: Planet) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Planet) => {
    return filters.terrain === ''
      ? element
      : element.terrain === filters.terrain;
  };
 
  return (
    <>
      <PlanetFilter
        filters={filters}
        options={options}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {list && (list as Planet[])
          .filter(searching)
          .filter(filtering)
          .map((planet: Planet) => {
            return <PlanetCard key={planet.name} planet={planet} />;
          })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
