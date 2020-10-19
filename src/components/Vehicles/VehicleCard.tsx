import React from 'react';
import {Link} from 'react-router-dom';
import { Vehicle } from './types';

interface PropTypes {
  vehicle: Vehicle;
}

export default function VehicleCard({vehicle}: PropTypes) {
  return (
    <div className="cards-container">
      <div className="card">
        <Link to={`/vehicles/${vehicle.name}`}>
          <h2>{vehicle.name}</h2>
        </Link>
        <h6>Model: {vehicle.model}</h6>
        <h6>Class: {vehicle.vehicle_class}</h6>
        <h6>Max passengers: {vehicle.passengers }</h6>
      </div>
    </div>
  );
}
