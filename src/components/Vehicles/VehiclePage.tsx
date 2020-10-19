import React from 'react';
import GetName from '../common/GetName';
import {Vehicle} from './types';

interface Props {
  vehicle: Vehicle;
}

export default function VehiclePage({vehicle}: Props) {
  return (
    <div className="details-page">
      <h1>{vehicle.name}</h1>
      <h5>Model: {vehicle.model}</h5>
      <h5>Class: {vehicle.vehicle_class}</h5>
      <h5>Manufacturer : {vehicle.manufacturer}</h5>
      <h5>Price: {vehicle.cost_in_credits} galactic credits</h5>
      <h5>Length: {vehicle.length} </h5>
      <h5>Crew: {vehicle.crew}</h5>
      <h5>Max passengers : {vehicle.passengers}</h5>
      <h5>Cargo capacity: {vehicle.cargo_capacity} kilograms</h5>
      <h5>
        Pilots: <GetName type="people" link={vehicle.pilots} />
      </h5>
      <h5>
        Films: <GetName type="films" link={vehicle.films} />
      </h5>
    </div>
  );
}
