import { cn } from "@/utils";
import Image from "next/image";

import type { Pokemon } from "@/api/schema";

export interface PokemonImageProps {
  pokemon: Pokemon;
  className?: string;
  isSquareView?: boolean;
}

export const PokemonImage: React.FC<PokemonImageProps> = ({ className, isSquareView = false, pokemon }) => (
  <div className={cn("bg-white", !isSquareView ? " py-8" : "p-1", className)}>
    <div className={cn("relative", !isSquareView ? "h-40" : "size-16")}>
      <Image src={pokemon.image} alt={`Pokemon - ${pokemon.name}`} className={cn("size-full object-contain")} fill />
    </div>
  </div>
);
