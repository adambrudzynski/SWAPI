import {Reducer} from 'redux';
import {Person} from '../../common/types';
import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  ApiActionTypes,
} from './apiTypes';

interface State {
  loading: boolean;
  data: Person[] | [];
  error: boolean;
  nextURL: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: false,
  nextURL: null,
};

const apiReducer: Reducer<State, ApiActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        data: [...state.data, ...action.payload.results],
        nextURL: action.payload.next,
        error: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default apiReducer;
