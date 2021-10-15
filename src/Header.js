import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="container">
      <NavLink to="pokemons">Pokemons</NavLink>
      <NavLink to="locations">Locations</NavLink>
    </nav>
  );
};

export default Header;
