import { apiResponse } from "../../common/types";

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

interface FetchRequersAction {
  type: typeof FETCH_REQUEST;
}

interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: apiResponse
}

interface FetchErrorAction {
  type: typeof FETCH_ERROR;
}

export type ApiActionTypes =
  | FetchRequersAction
  | FetchSuccessAction
  | FetchErrorAction;
