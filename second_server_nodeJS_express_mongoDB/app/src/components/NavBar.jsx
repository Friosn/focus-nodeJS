import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="movies">Movies</NavLink>
      </div>
      <div>
        <NavLink to="directors">Directors</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
