"use client";

import { favoritePokemon, unFavoritePokemon } from "@/api/mutations";
import { HeartIcon } from "@/components/Icons";
import { cn } from "@/utils";

import type { Pokemon } from "@/api/schema";

export interface FavoriteButtonProps {
  className?: string;
  pokemon: Pokemon;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ className, pokemon }) => {
  const handleFavoriteClick = async (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault();
    if (pokemon.isFavorite) {
      await unFavoritePokemon(pokemon.id);
    } else {
      await favoritePokemon(pokemon.id);
    }
  };

  return (
    <HeartIcon
      className={cn("text-favorite cursor-pointer", pokemon.isFavorite && "fill-favorite", className)}
      onClick={(e) => handleFavoriteClick(e)}
    />
  );
};
