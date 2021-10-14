import React from 'react';
import Locations from './Components/Locations';
import Pokemons from './Components/Pokemons';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <NavLink to="pokemons">
        <Pokemons />{' '}
      </NavLink>
      <NavLink to="locations">
        <Locations />{' '}
      </NavLink>
    </nav>
  );
};

export default Header;
