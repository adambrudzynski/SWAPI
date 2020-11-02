import {
  ReducerFactoryName,
  FetchSuccessAction,
  FetchErrorAction,
  FetchRequestAction,
  FetchRequestTypes,
  FetchSuccessTypes,
  FetchErrorTypes,
} from './apiTypes';
import {Dispatch} from 'redux';
import {apiResponse} from '../../common/types';

type FetchDataAction = {
  type: FetchRequestTypes | FetchSuccessTypes | FetchErrorTypes;
  payload?: apiResponse;
};

export type Actions = FetchDataAction | FetchSuccessAction | FetchErrorAction;

export const fetchData = (endpoint: string, type: ReducerFactoryName) => (
  dispatch: Dispatch<Actions>
) => {
  dispatch(fetchRequest(type));
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(fetchSuccess(data, type));
    })
    .catch((error) => {
      dispatch(fetchError(type));
    });
};

export const fetchRequest = (type: ReducerFactoryName): FetchRequestAction => {
  return {
    type: `FETCH_REQUEST_${type}` as FetchRequestTypes,
  };
};

export const fetchSuccess = (
  data: apiResponse,
  type: ReducerFactoryName
): FetchSuccessAction => {
  return {
    type: `FETCH_SUCCESS_${type}` as FetchSuccessTypes,
    payload: data,
  };
};

export const fetchError = (type: ReducerFactoryName): FetchErrorAction => {
  return {
    type: `FETCH_ERROR_${type}` as FetchErrorTypes,
  };
};
