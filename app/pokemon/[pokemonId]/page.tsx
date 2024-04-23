import { SharedPokemonInfo } from "@/app/_components/shared-pokemon-info";
import { getPokemon } from "@/lib/utils/pokemon";

export default async function PokemonDetailPage({
  params: { pokemonId },
}: {
  params: { pokemonId: string };
}) {
  const pokemon = await getPokemon(+pokemonId);
  return (
    <main>
      <SharedPokemonInfo id={+pokemonId} pokemon={pokemon} />
    </main>
  );
}
