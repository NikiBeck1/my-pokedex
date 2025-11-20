import React from 'react';
import './App.css';
import Card from './components/card';
import {
  filterByType,
  filterPokemonByName,
  getListOf,
  filterByWeakness,
} from './helpers/searchHelpers';
import Header from './components/header';

function App() {
  const [cards, setCards] = React.useState([]);
  const [searchPokemon, setSearchPokemon] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedWeakness, setSelectedWeakness] = React.useState('');

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then((res) => res.json())
      .then((data) => setCards(data.pokemon))
      .catch((err) => console.log(err));
  }, []);

  const names = getListOf(cards, 'name');
  const types = getListOf(cards, 'type');
  const weaknesses = getListOf(cards, 'weaknesses');

  let filteredPokemon = cards;

  if (searchPokemon) {
    filteredPokemon = filterPokemonByName(filteredPokemon, searchPokemon);
  }
  if (selectedType) {
    filteredPokemon = filterByType(filteredPokemon, selectedType);
  }
  if (selectedWeakness) {
    filteredPokemon = filterByWeakness(filteredPokemon, selectedWeakness);
  }

  return (
    <>
      <Header
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedWeakness={selectedWeakness}
        setSelectedWeakness={setSelectedWeakness}
        names={names}
        types={types}
        weaknesses={weaknesses}
      />
      <Card cards={filteredPokemon} />
    </>
  );
}

export default App;
