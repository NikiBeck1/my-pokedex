
function filterPokemonByName(cards, name) {
  const query = name.trim().toLowerCase();
  if (!query) return cards;

  return cards.filter(card =>
    card.name?.toLowerCase().includes(query)
  );
}


function getListOf(cards, key) {
  const list = cards.flatMap(card => {
    const value = card[key];

    if (Array.isArray(value)) {
      return value;
    }
    if (value == null) {
      return [];
    }
    return [value];
  });

  return [...new Set(list)].sort();
}


function filterByType(cards, type) {
  if (!type) return cards;

  return cards.filter(card =>
    Array.isArray(card.type) && card.type.includes(type)
  );
}


function filterByWeakness(cards, weakness) {
  if (!weakness) return cards;

  return cards.filter(card =>
    Array.isArray(card.weaknesses) && card.weaknesses.includes(weakness)
  );
}

export { getListOf, filterPokemonByName, filterByType, filterByWeakness };
