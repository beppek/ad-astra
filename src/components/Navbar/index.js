import React from 'react';
import { Link } from 'gatsby';
import logo from '../../img/logo.svg';

import NavbarWrapper from './NavbarWrapper';
import Brand from './Brand';
import NavItems from './NavItems';

const Navbar = () => (
  <NavbarWrapper>
    <div className="container">
      <Brand>
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="Interstellaris Logo"
              style={{ width: '88px' }}
            />
          </figure>
        </Link>
      </Brand>
      <NavItems>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </NavItems>
      <div className="navbar-end" />
    </div>
  </NavbarWrapper>
);

export default Navbar;
