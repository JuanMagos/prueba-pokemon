import { useContext } from 'react';
import { AvatarModal } from './PokemonDetail.styles';
import { PokemonContext } from '../../context/PokemonContext';
import { Box, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../shared/texts';
import { pokemonColors } from '../../shared/theme';
const PokemonDetail = () => {
  const { pokemon } = useContext(PokemonContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: pokemonColors[pokemon.types[0].type.name],
          marginBottom: '20px',
        }}
      >
        <AvatarModal src={pokemon.sprites.front_default} />
      </Box>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        {capitalizeFirstLetter(pokemon.name)}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Types: {pokemon.types.map((type) => type.type.name).join(', ')}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Moves: {pokemon.moves.map((move) => move.move.name).join(', ')}
      </Typography>
    </Box>
  );
};

export default PokemonDetail;
