export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';


export type AuthActions = {
    type:
      | typeof LOGIN_REQUEST
      | typeof LOGIN_ERROR
      | typeof LOGIN_SUCCESS
      | typeof LOGOUT;
  };