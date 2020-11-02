import {Dispatch} from 'redux';
import fakeLogin from '../../Auth/fakeLogin';
import {createBrowserHistory} from 'history';
import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from './authTypes';

type FromType = {
  pathname: string;
};

export const login = (username: string, password: string) => (
  dispatch: Dispatch<any>
) => {
  dispatch(LoginRequest());
  fakeLogin(username, password)
    .then((succes) => {
      dispatch(LoginSuccess());
    })
    .catch((error) => {
      dispatch(LoginError());
    });
};

export const LoginRequest = () => {
  return {type: LOGIN_REQUEST};
};

export const LoginSuccess = () => {
  return {type: LOGIN_SUCCESS};
};

export const logout = () => {
  localStorage.removeItem('tokens');
  return {type: LOGOUT};
};

export const LoginError = () => {
  return {type: LOGIN_ERROR};
};
