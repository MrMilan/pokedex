import { Suspense } from "react";

import { getPokemons } from "@/api/queries";
import { ContentFilter, ViewMode } from "@/modules/pokemons/enums";
import { cn } from "@/utils";

import { Filters } from "./Filters";
import { PokemonListItem } from "./PokemonListItem";
import { getSearchParams } from "./pokemonList.utils";

import { DataErrorHandler } from "@/components/DataErrorHandler";
import type { PokemonListParams, UrlFiltrationSearchParams } from "@/modules/pokemons/types";

type ListProps = {
  params?: UrlFiltrationSearchParams;
};

export const List: React.FC<ListProps> = ({ params }) => {
  const parsedSearchParams = getSearchParams(params);

  return (
    <div className="min-w-[650px] space-y-5 p-2 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Filters />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonsContent {...parsedSearchParams} />
      </Suspense>
    </div>
  );
};

const PokemonsContent: React.FC<PokemonListParams> = async ({ contentFilter, viewMode, name, pokemonType }) => {
  const isGridView = viewMode === ViewMode.Grid;

  const filters =
    pokemonType?.length || contentFilter === ContentFilter.Favorite
      ? {
          type: pokemonType || undefined,
          ...(contentFilter === ContentFilter.Favorite && { isFavorite: true }),
        }
      : undefined;

  const result = await getPokemons({
    limit: 10,
    search: name || undefined,
    filter: filters,
  });

  if (result.serverError || !result.dataResult) {
    return <DataErrorHandler result={result} dataType="Pokemons" />;
  }

  return (
    <div
      className={cn(
        "mx-auto max-w-[1920px]",
        isGridView
          ? "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          : "flex flex-col gap-4"
      )}
    >
      {result.dataResult.edges.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} itemType={viewMode} />
      ))}
    </div>
  );
};
