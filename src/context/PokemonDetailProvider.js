import { useState } from 'react';
import { PokemonContext } from './PokemonContext';

const PokemonDetailProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, openModal, setOpenModal }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonDetailProvider;
