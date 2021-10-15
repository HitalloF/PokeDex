import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Pokemons.module.css';

const Pokemons = () => {
  const [dados, setDados] = React.useState('');
  const [next, setNext] = React.useState('');
  const [next1, setNext1] = React.useState('');
  const [hidden, setHidden] = React.useState(true);
  const [hidden1, setHidden1] = React.useState(true);
  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
      .then((response) => response.json())
      .then((json) => setNext(json));
  }, []);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20')
      .then((response) => response.json())
      .then((json) => setNext1(json));
  }, []);
  console.log(next1);

  function handleClick(event) {
    const Pokemon = event.target.innerText;
    window.localStorage.setItem('Pokemon', Pokemon);
  }

  return (
    <section className="container">
      {dados &&
        dados.results.map((p) => (
          <NavLink
            className={`${styles.box}  `}
            onClick={handleClick}
            key={p.name}
            to={p.name}
          >
            {p.name}
          </NavLink>
        ))}
      <button onClick={() => setHidden(!hidden)} className={styles.vermais}>
        Ver Mais
      </button>

      {hidden && false}

      {!hidden &&
        next &&
        next.results.map((p1) => (
          <NavLink
            className={`${styles.box}  `}
            onClick={handleClick}
            to={p1.name}
            key={p1.name}
          >
            {p1.name}
          </NavLink>
        ))}
      <button onClick={() => setHidden1(!hidden1)} className={styles.vermais}>
        Ver Mais
      </button>
      {hidden1 && false}
      {!hidden1 &&
        next1 &&
        next.results.map((p2) => (
          <NavLink
            className={`${styles.box}  `}
            onClick={handleClick}
            to={p2.name}
            key={p2.name}
          >
            {p2.name}
          </NavLink>
        ))}
    </section>
  );
};

export default Pokemons;
