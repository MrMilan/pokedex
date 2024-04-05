import { getPokemonTypes } from "@/api/queries";
import { DataErrorHandler } from "@/components/DataErrorHandler";
import { FiltersForm } from "./FiltersForm";

export const Filters: React.FC = async () => {
  const result = await getPokemonTypes();

  if (result.serverError || !result.dataResult) {
    return <DataErrorHandler result={result} dataType="Pokemon types" />;
  }

  const pokemonTypeOptions = result.dataResult.map((type) => ({ value: type, label: type }));

  return <FiltersForm pokemonTypeOptions={pokemonTypeOptions} />;
};
