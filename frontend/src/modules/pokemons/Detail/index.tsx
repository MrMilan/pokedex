import { Suspense } from "react";

import { getPokemonByName } from "@/api/queries";

import { DataErrorHandler } from "@/components/DataErrorHandler";
import { PokemonDetailCard } from "./PokemonDetailCard";
import { PokemonSmallCard } from "./PokemonSmallCard";

import type { Pokemon } from "@/api/schema";

type DetailProps = {
  pokemonName: string;
};

export const Detail: React.FC<DetailProps> = ({ pokemonName }) => (
  <div className="min-w-[650px] space-y-5 p-2 md:p-10">
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonContent pokemonName={pokemonName} />
    </Suspense>
  </div>
);

const PokemonContent: React.FC<DetailProps> = async ({ pokemonName }) => {
  const result = await getPokemonByName(pokemonName);

  if (result.serverError || !result.dataResult) {
    return <DataErrorHandler result={result} dataType="Pokemon" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <PokemonDetailCard pokemon={result.dataResult} />
      <div className="flex flex-col gap-6">
        <span className="font-bold">Evolutions</span>
        <PokemonEvolutions evolutions={result.dataResult.evolutions} />
      </div>
    </div>
  );
};

//NOTE: This is a workaround. Typically, I asked BE or developed a new query to get the evolutions details what I need.
const PokemonEvolutions: React.FC<{ evolutions: Pokemon[] }> = async ({ evolutions }) => {
  const evolutionDetails = await Promise.all(
    evolutions.map(async (evolution) => {
      const evolutionResult = await getPokemonByName(evolution.name);
      return evolutionResult;
    })
  );

  //NOTE: I can handle for every result, but it is quick solution.
  const problemResult = evolutionDetails.find((result) => result.serverError || !result.dataResult);
  if (problemResult) {
    return <DataErrorHandler result={problemResult} dataType="Pokemon evolutions" />;
  }

  return (
    <div className="grid grid-cols-6 gap-4">
      {evolutionDetails.map(
        //NOTE: It could be handled above, but for save I handle it here too
        ({ dataResult: evolution }) => evolution && <PokemonSmallCard key={evolution.id} pokemon={evolution} />
      )}
    </div>
  );
};
