import React from 'react';
import Locations from './Components/Locations';
import Pokemons from './Components/Pokemons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
