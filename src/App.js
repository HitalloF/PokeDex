import React from 'react';
import Locations from './Components/Locations';
import Pokemons from './Components/Pokemons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Pokemon from './Components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="pokemons" element={<Pokemons />} /> |
          <Route path="locations" element={<Locations />} />
          <Route path="pokemons/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
