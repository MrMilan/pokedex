import { ViewMode } from "@/modules/pokemons/enums";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./FavoriteButton";

import type { Pokemon } from "@/api/schema";

export interface ItemProps {
  itemType: ViewMode;
  className?: string;
  pokemon: Pokemon;
}

export const PokemonListItem: React.FC<ItemProps> = ({ className, itemType, pokemon }) => {
  const isGridItem = itemType === ViewMode.Grid;

  return (
    <div
      className={cn(
        "bg-bg-secondary border-fg-secondary text-fg-primary flex border",
        isGridItem && "flex-col",
        className
      )}
    >
      <Link href={`/pokemons/${pokemon.name}`}>
        <div className={cn("bg-white", isGridItem ? " py-8" : "p-1")}>
          <div className={cn("relative", isGridItem ? "h-40" : "size-16")}>
            <Image
              src={pokemon.image}
              alt={`Pokemon - ${pokemon.name}`}
              className={cn("size-full object-contain")}
              fill
            />
          </div>
        </div>
      </Link>
      <div className={cn("flex w-full items-center justify-between p-2")}>
        <div className="flex flex-col">
          <Link href={`/pokemons/${pokemon.name}`}>
            <span className="font-bold">{pokemon.name}</span>
          </Link>
          <span>{pokemon.types.join(", ")}</span>
        </div>
        <FavoriteButton pokemon={pokemon} />
      </div>
    </div>
  );
};
