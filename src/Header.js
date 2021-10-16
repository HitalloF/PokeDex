import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <nav className={styles.title}>
      <NavLink className={styles.poker} to="pokemons">
        Pokemons |
      </NavLink>
      <NavLink className={styles.title} to="/">
        | HOME |
      </NavLink>
      <NavLink className={styles.title} to="locations">
        | Locations
      </NavLink>
    </nav>
  );
};

export default Header;
