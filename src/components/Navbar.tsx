import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import Logout from './Auth/Logout';
import {AuthState} from './redux/auth/authReducer';

export default function Navbar() {
  let location = useLocation();

  const [activeItem, setActiveItem] = useState('');
  const isLoggedIn = useSelector(({auth}: {auth: AuthState}) => auth.loggedIn);
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <>
      {isLoggedIn ? (
        <nav className="navbar">
          <div>
            <Link
              className={activeItem.includes('/people') ? 'active' : 'inactive'}
              to="/people"
            >
              People
            </Link>
            <Link
              className={activeItem.includes('/films') ? 'active' : 'inactive'}
              to="/films"
            >
              Films
            </Link>
            <Link
              className={
                activeItem.includes('/planets') ? 'active' : 'inactive'
              }
              to="/planets"
            >
              Planets
            </Link>
            <Link
              className={
                activeItem.includes('/starships') ? 'active' : 'inactive'
              }
              to="/starships"
            >
              Starships
            </Link>
            <Link
              className={
                activeItem.includes('/vehicles') ? 'active' : 'inactive'
              }
              to="/vehicles"
            >
              Vehicles
            </Link>
            <Link
              className={
                activeItem.includes('/species') ? 'active' : 'inactive'
              }
              to="/species"
            >
              Species
            </Link>
          </div>
          <Logout />
        </nav>
      ) : null}
    </>
  );
}
