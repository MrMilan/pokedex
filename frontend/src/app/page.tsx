import { List as PokemonList } from "@/modules/pokemons/List";
import type { UrlFiltrationSearchParams } from "@/modules/pokemons/types";

type Props = {
  searchParams?: UrlFiltrationSearchParams;
};

export default function Home({ searchParams }: Props) {
  return (
    <main className="min-h-screen">
      <PokemonList params={searchParams} />
    </main>
  );
}
