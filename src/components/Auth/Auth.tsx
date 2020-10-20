import {createContext, useContext} from 'react';

export type ContextType = {
  authTokens: string
  setAuthTokens: (data: string) => void
};

export const AuthContext = createContext<ContextType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}
