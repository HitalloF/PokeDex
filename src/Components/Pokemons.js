import React from 'react';
import { NavLink } from 'react-router-dom';

const Pokemons = () => {
  const [dados, setDados] = React.useState('');

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function handleClick(event) {
    const Pokemon = event.target.innerText;
    window.localStorage.setItem('Pokemon', Pokemon);
  }

  return (
    <section>
      {dados &&
        dados.results.map((p) => (
          <NavLink onClick={handleClick} key={p.name} to={p.name}>
            {p.name}
          </NavLink>
        ))}
    </section>
  );
};

export default Pokemons;
