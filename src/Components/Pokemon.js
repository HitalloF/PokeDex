import React from 'react';

const Pokemon = () => {
  const [dados, setDados] = React.useState('');

  React.useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('Pokemon')}`,
    )
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <section>
      {dados && (
        <div>
          <h1>{dados.name}</h1>
          <div>
            <img src={dados.sprites.front_default} alt="" />
            <img src={dados.sprites.back_default} alt="" />
          </div>
          <div>
            <img src={dados.sprites.front_shiny} alt="" />
            <img src={dados.sprites.back_shiny} alt="" />
          </div>
        </div>
      )}
      <div>
        {dados &&
          dados.types.map((t) => <li key={t.type.url}>{t.type.name}</li>)}
      </div>
    </section>
  );
};

export default Pokemon;
