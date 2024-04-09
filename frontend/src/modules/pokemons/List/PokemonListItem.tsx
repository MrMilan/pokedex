import { Box } from "@/components/Box";
import { FavoriteButton } from "@/modules/pokemons/components/FavoriteButton";
import { PokemonImage } from "@/modules/pokemons/components/PokemonImage";
import { ViewMode } from "@/modules/pokemons/enums";
import { cn } from "@/utils";
import Link from "next/link";

import type { Pokemon } from "@/api/schema";

export interface ItemProps {
  itemType: ViewMode;
  className?: string;
  pokemon: Pokemon;
}

export const PokemonListItem: React.FC<ItemProps> = ({ className, itemType, pokemon }) => {
  const isGridItem = itemType === ViewMode.Grid;

  return (
    <Box className={cn("flex", isGridItem && "flex-col", className)}>
      <Link href={`/pokemons/${pokemon.name}`}>
        <PokemonImage pokemon={pokemon} isSquareView={!isGridItem} />
      </Link>
      <div className="flex w-full items-center justify-between p-2">
        <div className="flex flex-col">
          <Link href={`/pokemons/${pokemon.name}`}>
            <span className="font-bold">{pokemon.name}</span>
          </Link>
          <span>{pokemon.types.join(", ")}</span>
        </div>
        <FavoriteButton pokemon={pokemon} />
      </div>
    </Box>
  );
};
