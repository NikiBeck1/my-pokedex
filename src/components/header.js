import React from 'react';

function Header({
  searchPokemon,
  setSearchPokemon,
  selectedType,
  setSelectedType,
  selectedWeakness,
  setSelectedWeakness,
  types,
  weaknesses,
}) {
  return (
    <header>
      <h1>My Pokedex</h1>

      <div className="searchContainer">
        <input
          className="search"
          type="text"
          placeholder="Search Pokemon"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </div>

      <div className="filterContainer">
        <select
          className="weaknessFilter"
          value={selectedWeakness}
          onChange={(e) => setSelectedWeakness(e.target.value)}
        >
          <option value="">Weakness</option>
          {weaknesses.map((weakness) => (
            <option key={weakness} value={weakness}>
              {weakness}
            </option>
          ))}
        </select>

        <select
          className="typesFilter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
