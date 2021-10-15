import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <NavLink to="pokemons">Pokemons</NavLink>
      <NavLink to="locations">Locations</NavLink>
    </nav>
  );
};

export default Header;
