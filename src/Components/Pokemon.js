import React from 'react';
import styles from './Pokemon.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  console.log(dados);

  return (
    <section className="container">
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

      <div className={styles.txt}>
        <h2>TYPE</h2>

        {dados &&
          dados.types.map((t) => <li key={t.type.url}>{t.type.name}</li>)}
      </div>
      <div className={styles.txt}>
        <h2>STAT</h2>

        {dados &&
          dados.stats.map((s) => <li key={s.stat.name}>{s.stat.name}</li>)}
      </div>
    </section>
  );
};

export default Pokemon;
