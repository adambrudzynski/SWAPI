import React, {useEffect, useRef, useState} from 'react';
import {Vehicle} from './types';
import VehicleFilter from './VehiclesFilter';
import VehicleCard from './VehicleCard';
import { fetchData } from '../redux/api/apiActions';
import useLoadMore from '../hooks/useLoadMore';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';

const defaultFilters = {
  search: '',
};

export function VehiclesList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Vehicle[]>(({vehicles}) => vehicles.data);
  const nextURL = useSelector<IRootState, string | null>(({vehicles}) => vehicles.nextURL);
  const loading = useSelector<IRootState, boolean>(({vehicles}) => vehicles.loading);
  const error = useSelector<IRootState, boolean>(({vehicles}) => vehicles.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'VEHICLES', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/vehicles/', 'VEHICLES'));
  }, []);
  const handleFilters = (name: string, value: string) => {
    console.log(name, value);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Vehicle) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Vehicle) => {
    return  element
  };
 
  return (
    <>
      <VehicleFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {list && (list as Vehicle[])
          .filter(searching)
          .filter(filtering)
          .map((vehicle: Vehicle) => {
            return <VehicleCard key={vehicle.name} vehicle={vehicle} />;
          })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
