import React, {ReactChild} from 'react';
import {useSelector} from 'react-redux';
import {AuthState} from '../redux/auth/authReducer';
import Login from './Login';

type Props = {
  children: ReactChild;
};

export const Protected = ({children}: Props) => {
  const isLoggedIn = useSelector(({auth}: {auth: AuthState}) => auth.loggedIn);
  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Login />;
  }
};
