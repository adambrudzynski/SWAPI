import React, {ReactChild} from 'react';
import {useAuth} from './Auth';
import Login from './Login';

type Props = {
  children: ReactChild;
};

export const Protected = ({children}: Props) => {
  const {authTokens} = useAuth() as {authTokens: string | null}

  if (authTokens === 'testtest') {
    return <>{children}</>;
  } else {
    return <Login />;
  }
};
