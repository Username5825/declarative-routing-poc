import { getAllPokemons } from "@/lib/utils/pokemon";
import SearchList from "./SearchList";

// 🤔
export const dynamic = "force-dynamic";

type SearchParamsProps = {
  searchParams: { q?: string };
};

export default async function SearchPage({ searchParams }: SearchParamsProps) {
  const pokemon = await getAllPokemons(10, searchParams.q);

  return (
    <main className="mt-5 flex flex-col">
      <SearchList pokemon={pokemon} />
    </main>
  );
}
