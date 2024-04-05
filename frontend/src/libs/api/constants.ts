export const NEXT_CACHE_TAGS = {
  pokemons: "pokemons",
  pokemon: (id: string) => `pokemon-${id}`,
  pokemonByName: (name: string) => `pokemon-${name}`,
};
