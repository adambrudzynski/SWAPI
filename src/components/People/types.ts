import {Film} from '../Films/types';
import {Planet} from '../Planets/types';
import {Species} from '../Species/types';
import {Starship} from '../Starships/types';
import {Vehicle} from '../Vehicles/types';

export interface Person {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[] | [];
  species: string[] | [];
  starships: string[] | [];
  vehicles: string[] | [];
  url: string;
}

export interface apiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[] | Planet[] | Vehicle[] | Starship[] | Film[] | Species[];
}
