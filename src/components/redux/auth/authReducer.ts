import {Reducer} from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  AuthActions,
} from './authTypes';

export interface AuthState {
  loggingIn?: boolean;
  loggedIn?: boolean;
  error?: boolean;
}

let tokens = localStorage.getItem('tokens');
const currentTokens = tokens ? JSON.parse(tokens) : null;
const initialState: AuthState = currentTokens ? {loggedIn: true} : {};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        error: true,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducer;
