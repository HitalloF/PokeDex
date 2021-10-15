import React from 'react';
import styles from './Pokemon.module.css';

const Pokemon = () => {
  const [dados, setDados] = React.useState('');
  const [ativo, setAtivo] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('Pokemon')}`,
    )
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function handleClick() {
    setAtivo(!ativo);
    window.document.querySelector('button').classList.toggle('active');
  }

  return (
    <section>
      <h1 className={styles.title}>{dados.name}</h1>
      <div className={styles.pokimg}>
        {ativo === true && dados && (
          <div>
            <img src={dados.sprites.front_default} alt="" />
            <img src={dados.sprites.back_default} alt="" />
          </div>
        )}

        {ativo === !true && dados && (
          <div>
            <img src={dados.sprites.front_shiny} alt="" />
            <img src={dados.sprites.back_shiny} alt="" />
          </div>
        )}
      </div>
      <button className={styles.btn} onClick={handleClick}>
        Shiny
      </button>
      <div>
        {dados &&
          dados.types.map((t) => <li key={t.type.url}>{t.type.name}</li>)}
      </div>
    </section>
  );
};

export default Pokemon;
