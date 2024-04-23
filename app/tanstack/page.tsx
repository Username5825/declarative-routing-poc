"use client";
import { GetAllPokemonsWithTanstackQuery } from "@/lib/utils/pokemon";
import { useQuery } from "@tanstack/react-query";
import { FlexCol } from "@/components/ui/containers";
import { H2 } from "@/components/ui/headings";
import { Pokemon } from "@/lib/utils/types";
import { R } from "@/routes";
import { useState } from "react";
import Image from "next/link";

interface SelectableGridProps {
  allPokemons?: Pokemon[]; // Make allPokemons prop optional
}

type PokemonWithTantask = {
  name: string;
  url: string;
};

export default function Home() {
  // const allPokemons = await getAllPokemons();
  const [selected, setSelected] = useState<PokemonWithTantask>();

  const { data: allPokemonsTanstack } = useQuery({
    queryKey: ["pokemons"],
    queryFn: GetAllPokemonsWithTanstackQuery,
  });

  console.log(allPokemonsTanstack);

  return (
    <main className="mt-5">
      <FlexCol>
        {allPokemonsTanstack?.map((pokemon: PokemonWithTantask) => (
          <p key={pokemon.url}>{pokemon.name}</p>
        ))}
      </FlexCol>
    </main>
  );
}

//
//

function SharedPokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <FlexCol className="p-2 max-w-1/4">
      <div className="bg-gray-800 rounded-tl-xl rounded-tr-xl">
        {/* <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={1200}
          height={1200}
          className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
        /> */}
      </div>
      <div className="rounded-br-xl p-5 rounded-bl-xl border-l-2 border-b-2 border-r-2 border-gray-800 bg-gray-900">
        <H2>{pokemon.name}</H2>
        <div>{R.PokemonDetail({ pokemonId: pokemon.id })}</div>
      </div>
    </FlexCol>
  );
}
