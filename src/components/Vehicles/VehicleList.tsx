import React, {useState} from 'react';
// import PersonCard from './PersonCard';
import {Vehicle} from './types';
import VehicleFilter from './VehiclesFilter';
import VehicleCard from './VehicleCard';
import useFetchAll from '../hooks/useFetchAll';

const defaultFilters = {
  search: '',
  gender: '',
};

export function VehiclesList() {
  const [loading, error, vehicles] = useFetchAll('https://swapi.dev/api/vehicles/');
  const [filters, setFilters] = useState(defaultFilters);

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
    // filters.gender === '' ? element : element. === filters.gender;
  };
  if (loading && vehicles.length < 1) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <VehicleFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {(vehicles as Vehicle[])
          .filter(searching)
          .filter(filtering)
          .map((vehicle: Vehicle) => {
            return <VehicleCard key={vehicle.name} vehicle={vehicle} />;
          })}
      </div>
    </>
  );
}
