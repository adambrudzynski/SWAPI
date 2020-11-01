import React, {MouseEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/auth/authActions';

interface AuthType {
  loggingIn?: boolean;
  loggedIn?: boolean;
  error?: boolean;
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(({auth}: {auth: AuthType}) => auth.error);
  const dispatch = useDispatch();

  const fakeLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <div className="login">
      <span>Please login with username: test, password: test</span>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={(e) => fakeLogin(e)}>
          Sign In
        </button>
      </form>
      {error && (
        <span className="login-error">Invalid username or password</span>
      )}
    </div>
  );
}
