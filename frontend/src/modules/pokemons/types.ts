import { ContentFilter, ViewMode } from "@/modules/pokemons/enums";
export type UrlFiltrationSearchParams = {
  name?: string;
  pokemonType?: string;
  contentFilter?: string;
  viewMode?: string;
};

export type PokemonListParams = {
  name?: string;
  pokemonType?: string;
  contentFilter: ContentFilter;
  viewMode: ViewMode;
};
