import {Reducer} from 'redux';
import {apiResponse, Person} from '../../common/types';
import {Actions} from './apiActions';
import {ReducerFactoryName} from './apiTypes';

interface State {
  readonly loading: boolean;
  readonly data: Person[] | [];
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

// const apiReducer: Reducer<State, ApiActionTypes> = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case FETCH_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_SUCCESS:
//       return {
//         loading: false,
//         data: [...state.data, ...action.payload.results],
//         nextURL: action.payload.next,
//         error: false,
//       };
//     case FETCH_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     default:
//       return state;
//   }
// };
// export default apiReducer;
