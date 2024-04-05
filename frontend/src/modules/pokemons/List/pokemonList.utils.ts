import { ContentFilter, ViewMode } from "@/modules/pokemons/enums";
import type { PokemonListParams, UrlFiltrationSearchParams } from "@/modules/pokemons/types";

export const getSearchParams = (searchParams?: UrlFiltrationSearchParams) =>
  ({ contentFilter: ContentFilter.All, viewMode: ViewMode.Grid, ...searchParams }) as PokemonListParams;
