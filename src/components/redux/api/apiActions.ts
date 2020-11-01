import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR} from './apiTypes';
import {Dispatch} from 'redux';
import {apiResponse} from '../../People/types';

type FetchDataAction = {
   type: 'FETCH_REQUEST' | 'FETCH_SUCCESS' | 'FETCH_ERROR';
   payload?: apiResponse;
};

type FetchRequest = {
  type: typeof FETCH_REQUEST;
};

type FetchSuccess = {
  type: typeof FETCH_SUCCESS;
  payload: apiResponse;
};

type FetchError = {
  type: typeof FETCH_ERROR;
};

export const fetchData = (endpoint: string) => (
  dispatch: Dispatch<FetchDataAction>
) => {
  dispatch(fetchRequest());
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(fetchSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchError());
    });
};

export const fetchRequest = (): FetchRequest => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (data: apiResponse): FetchSuccess => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchError = (): FetchError => {
  return {
    type: FETCH_ERROR,
  };
};
