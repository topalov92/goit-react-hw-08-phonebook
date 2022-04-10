import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelector from '../../redux/reduxAuth/authSelector';
import UserMenu from 'components/UserMenu';
import style from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <header>
      <nav className={style.Navigation}>
        <div>
          <NavLink
            exact
            to="/"
            className={style.Nav}
            activeClassName={style.Active}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/contacts"
            className={style.Nav}
            activeClassName={style.Active}
          >
            Phonebook
          </NavLink>
        </div>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <NavLink
              exact
              to="/register"
              className={style.Nav}
              activeClassName={style.Active}
            >
              Registration
            </NavLink>
            <NavLink
              exact
              to="/login"
              className={style.Nav}
              activeClassName={style.Active}
            >
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;