import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/auth/authActions';

export default function Logout() {
  const dispatch = useDispatch();
  return (
    <button className="btn" onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
}
