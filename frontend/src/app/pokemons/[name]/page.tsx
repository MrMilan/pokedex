import { Detail as PokemonDetail } from "@/modules/pokemons/Detail";
import type { PokemonUrlParams } from "@/modules/pokemons/types";

type Props = {
  params: PokemonUrlParams;
};

export default function PokemonDetailsPage({ params }: Props) {
  return (
    <main className="min-h-screen">
      <PokemonDetail pokemonName={params.name} />
    </main>
  );
}
