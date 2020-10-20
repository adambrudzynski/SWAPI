import React, {MouseEvent , useState} from 'react';
import {useAuth} from './Auth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const {setAuthTokens} = useAuth() as {setAuthTokens: (data: string) => void};

  const fakeLogin = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (username === 'test' && password === 'test') {
      setError(false)
      setAuthTokens(username+password)
    }
    setError(true)
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
        <button className='btn' onClick={(e) => fakeLogin (e)}>Sign In</button>
        
      </form>
      {error && <span className='login-error'>Invalid username or password</span>}
    </div>
  );
}
