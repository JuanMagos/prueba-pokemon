import { useContext } from 'react';
import { AvatarContainer, CustomListItemButton } from './PokemonList.styles';
import { capitalizeFirstLetter } from '../../shared/texts';
import { List, ListItemText, ListItemAvatar, Divider } from '@mui/material';
import { PokemonContext } from '../../context/PokemonContext';
const PokemonList = ({ pokemons }) => {
  const { setPokemon, setOpenModal } = useContext(PokemonContext);

  const handleClick = (pokemon) => {
    setPokemon(pokemon);
    setOpenModal(true);
  };
  return (
    <List
      sx={{
        width: '60%',
        bgcolor: 'background.paper',
        overflow: 'auto',
        maxHeight: 'calc(78vh - 64px)',
        borderRadius: '4px',
      }}
    >
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <CustomListItemButton
            test-id={pokemon.id}
            onClick={() => {
              handleClick(pokemon);
            }}
          >
            <ListItemAvatar>
              <AvatarContainer
                alt="Remy Sharp"
                src={pokemon.sprites.front_default}
              />
            </ListItemAvatar>
            <ListItemText
              primary={capitalizeFirstLetter(pokemon.name)}
              secondary={`#${pokemon.id}`}
            />

            <div>
              <ListItemText primary={`Moves: ${pokemon.moves.length}`} />
            </div>
          </CustomListItemButton>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default PokemonList;
