import React from 'react';
import {useAuth} from './Auth';

export default function Logout() {
  const {setAuthTokens} = useAuth() as {
    setAuthTokens: (data: string|null) => void;
  };
  return (
    <button className="btn" onClick={()=> setAuthTokens(null)}>
      Logout
    </button>
  );
}
