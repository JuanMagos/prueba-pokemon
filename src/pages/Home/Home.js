import { useEffect, useState, useContext } from 'react';
import { HomeContainer, SpacingList, BoxModal } from './Home.styles';
import PokemonList from '../../components/PokemonList/PokemonList';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import { Box, Button, Modal } from '@mui/material';
import { PokemonContext } from '../../context/PokemonContext';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const { openModal, setOpenModal } = useContext(PokemonContext);
  useEffect(() => {
    getPokemons(offset);
  }, []);

  const getPokemons = async (qt) => {
    console.log(offset);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${qt}`
    );
    const data = await response.json();
    Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      })
    )
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextPokemons = (e) => {
    e.preventDefault();
    setOffset(offset + 10);
    getPokemons(offset + 10);
  };

  const prevPokemons = (e) => {
    e.preventDefault();
    if (offset > 0) {
      setOffset(offset - 10);
      getPokemons(offset - 10);
    }
  };
  return (
    <HomeContainer>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <BoxModal>
          <PokemonDetail />
        </BoxModal>
      </Modal>

      <Box
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        <Box>
          <Button onClick={prevPokemons}>Prev</Button>

          <Button onClick={nextPokemons}>Next</Button>
        </Box>
      </Box>
      <SpacingList>
        <PokemonList pokemons={pokemons} />
      </SpacingList>
    </HomeContainer>
  );
};

export default Home;
