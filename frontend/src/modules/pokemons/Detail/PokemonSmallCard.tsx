import { Box } from "@/components/Box";
import { FavoriteButton } from "@/modules/pokemons/components/FavoriteButton";
import { PokemonImage } from "@/modules/pokemons/components/PokemonImage";
import Link from "next/link";

import type { Pokemon } from "@/api/schema";

export interface PokemonSmallCardProps {
  pokemon: Pokemon;
}

export const PokemonSmallCard: React.FC<PokemonSmallCardProps> = ({ pokemon }) => {
  const href = `/pokemons/${pokemon.name}`;
  return (
    <Box className="flex flex-col">
      <Link href={href}>
        <PokemonImage pokemon={pokemon} isSquareView={false} />
      </Link>
      <div className="flex w-full items-center justify-between p-2">
        <Link href={href}>
          <span className="font-bold">{pokemon.name}</span>
        </Link>
        <FavoriteButton pokemon={pokemon} />
      </div>
    </Box>
  );
};
