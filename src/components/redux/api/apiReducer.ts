import {ApiResults} from '../../common/types';
import {ReducerFactoryName} from './apiTypes';

interface State {
  readonly loading: boolean;
  readonly data: ApiResults;
  readonly error: boolean;
  readonly nextURL: string | null;
}

const initialState: State = {
  loading: false,
  data: [],
  error: false,
  nextURL: null,
};
export const apiReducerFactory = (name: ReducerFactoryName) => {
  return (state = initialState, action: any) => {
    switch (action.type) {
      case `FETCH_REQUEST_${name}`:
        return {
          ...state,
          loading: true,
        };
      case `FETCH_SUCCESS_${name}`:
        return {
          loading: false,
          data: [...state.data, ...action.payload.results],
          nextURL: action.payload.next,
          error: false,
        };
      case `FETCH_ERROR_${name}`:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };
};
