import React, {useEffect, useRef, useState} from 'react';
import {Species} from './types';
import SpeciesFilter from './SpeciesFilter';
import SpeciesCard from './SpeciesCard';
import { unique } from '../common/getDistinct';
import { fetchData } from '../redux/api/apiActions';
import useLoadMore from '../hooks/useLoadMore';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';

const defaultFilters = {
  search: '',
  classification : '',
};

export function SpeciessList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Species[]>(({species}) => species.data);
  const nextURL = useSelector<IRootState, string | null>(({species}) => species.nextURL);
  const loading = useSelector<IRootState, boolean>(({species}) => species.loading);
  const error = useSelector<IRootState, boolean>(({species}) => species.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'SPECIES', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/species/', 'SPECIES'));
  }, []);

  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const options = unique(list, 'classification') 

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Species) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Species) => {
    return  filters.classification === '' ? element : element.classification === filters.classification;
  };

  return (
    <>
      <SpeciesFilter
        filters={filters}
        options={options}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {list && (list as Species[])
          .filter(searching)
          .filter(filtering)
          .map((species: Species) => {
            return <SpeciesCard key={species.name} species={species} />;
          })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
