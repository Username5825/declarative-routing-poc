import { getAllPokemons } from "../lib/utils/pokemon";
import { SelectableGrid } from "./_components/SelectableGrid";

export default async function Home() {
  const pokemon = await getAllPokemons();

  return (
    <main className="mt-5">
      <SelectableGrid pokemon={pokemon} />
    </main>
  );
}
