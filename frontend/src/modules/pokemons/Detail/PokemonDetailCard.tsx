import type { Pokemon } from "@/api/schema";
import { Box } from "@/components/Box";
import { FavoriteButton } from "@/modules/pokemons/components/FavoriteButton";
import { PokemonImage } from "@/modules/pokemons/components/PokemonImage";
import { PokemonBattleMetric } from "./PokemonBattleMetric";
import { PokemonDimensions } from "./PokemonDimensions";

export interface PokemonDetailCardProps {
  pokemon: Pokemon;
}

export const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({ pokemon }) => (
  <Box className="flex flex-col">
    <PokemonImage pokemon={pokemon} isSquareView={false} />
    <div className="flex w-full items-center justify-between p-2">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{pokemon.name}</h1>
        <span>{pokemon.types.join(", ")}</span>
      </div>
      <FavoriteButton pokemon={pokemon} />
    </div>
    <div className="p-2">
      <PokemonBattleMetric abbreviation="CP" value={pokemon.maxCP} barClassName="bg-cp-bar" />
      <PokemonBattleMetric abbreviation="HP" value={pokemon.maxHP} barClassName="bg-hp-bar" />
    </div>
    <div className="border-fg-secondary grid grid-cols-2 border-t">
      <PokemonDimensions
        title="Weight"
        min={pokemon.weight.minimum}
        max={pokemon.weight.maximum}
        className="border-fg-secondary border-r"
      />
      <PokemonDimensions title="Height" min={pokemon.height.minimum} max={pokemon.height.maximum} />
    </div>
  </Box>
);
