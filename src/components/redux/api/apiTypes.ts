import {apiResponse} from '../../common/types';

export const FETCH_REQUEST_PEOPLE = 'FETCH_REQUEST_PEOPLE';
export const FETCH_SUCCESS_PEOPLE = 'FETCH_SUCCESS_PEOPLE';
export const FETCH_ERROR_PEOPLE = 'FETCH_ERROR_PEOPLE';
export const FETCH_REQUEST_FILMS = 'FETCH_REQUEST_FILMS';
export const FETCH_SUCCESS_FILMS = 'FETCH_SUCCESS_FILMS';
export const FETCH_ERROR_FILMS = 'FETCH_ERROR_FILMS';
export const FETCH_REQUEST_PLANETS = 'FETCH_REQUEST_PLANETS';
export const FETCH_SUCCESS_PLANETS = 'FETCH_SUCCESS_PLANETS';
export const FETCH_ERROR_PLANETS = 'FETCH_ERROR_PLANETS';
export const FETCH_REQUEST_SPECIES = 'FETCH_REQUEST_SPECIES';
export const FETCH_SUCCESS_SPECIES = 'FETCH_SUCCESS_SPECIES';
export const FETCH_ERROR_SPECIES = 'FETCH_ERROR_SPECIES';
export const FETCH_REQUEST_VEHICLES = 'FETCH_REQUEST_VEHICLES';
export const FETCH_SUCCESS_VEHICLES = 'FETCH_SUCCESS_VEHICLES';
export const FETCH_ERROR_VEHICLES = 'FETCH_ERROR_VEHICLES';
export const FETCH_REQUEST_STARSHIPS = 'FETCH_REQUEST_STARSHIPS';
export const FETCH_SUCCESS_STARSHIPS = 'FETCH_SUCCESS_STARSHIPS';
export const FETCH_ERROR_STARSHIPS = 'FETCH_ERROR_STARSHIPS';

export type FetchRequestTypes =
  | typeof FETCH_REQUEST_FILMS
  | typeof FETCH_REQUEST_PLANETS
  | typeof FETCH_REQUEST_SPECIES
  | typeof FETCH_REQUEST_VEHICLES
  | typeof FETCH_REQUEST_STARSHIPS
  | typeof FETCH_REQUEST_PEOPLE;

export interface FetchRequestAction {
  type: FetchRequestTypes;
}

export type FetchSuccessTypes =
  | typeof FETCH_SUCCESS_FILMS
  | typeof FETCH_SUCCESS_PLANETS
  | typeof FETCH_SUCCESS_SPECIES
  | typeof FETCH_SUCCESS_VEHICLES
  | typeof FETCH_SUCCESS_STARSHIPS
  | typeof FETCH_SUCCESS_PEOPLE;

export interface FetchSuccessAction {
  type: FetchSuccessTypes;
  payload: apiResponse;
}
export type FetchErrorTypes =
  | typeof FETCH_ERROR_FILMS
  | typeof FETCH_ERROR_PLANETS
  | typeof FETCH_ERROR_SPECIES
  | typeof FETCH_ERROR_VEHICLES
  | typeof FETCH_ERROR_STARSHIPS
  | typeof FETCH_ERROR_PEOPLE;

export interface FetchErrorAction {
  type: FetchErrorTypes;
}

export type ApiActionTypes =
  | FetchRequestAction
  | FetchSuccessAction
  | FetchErrorAction;

export type ReducerFactoryName =
  | 'PEOPLE'
  | 'FILMS'
  | 'PLANETS'
  | 'SPECIES'
  | 'VEHICLES'
  | 'STARSHIPS';
