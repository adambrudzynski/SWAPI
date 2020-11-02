import React, {ReactChild} from 'react';
import {useSelector} from 'react-redux';
import {RouteComponentProps, Redirect} from 'react-router';
import {AuthState} from '../redux/auth/authReducer';

type Props = {
  children: ReactChild[];
  location?: RouteComponentProps;
};

export const PrivateRoute = ({children, location}: Props) => {
  const isLoggedIn = useSelector(({auth}: {auth: AuthState}) => auth.loggedIn);

  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect to={{pathname: '/login', state: {from: location}}} />
      )}
    </>
  );
};
