"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Pokemon } from "../../lib/utils/types";
import { R } from "../../routes";
import { SharedPokemonCard } from "../_components/shared-pokemon-card";

type PokemonSearchProps = {
  pokemon: Pokemon[];
};

export default function Search({
  pokemon: initialPokemon,
}: PokemonSearchProps) {
  const q = (useSearchParams().get("q") as string) || "";
  const [query, setQuery] = useState(q);
  const [pokemon, setPokemon] = useState(initialPokemon);

  // ▶️ 10:09
  // PREVIOUSLY:
  // const search = async () => {
  //   const resp = await fetch(`/api/pokemon?q=${query}`);
  //   const data = await resp.json();
  //   setPokemon(data);
  // };

  const search = async () => {
    // const data = await getPokemonSearchAPI({}, { q: query });
    const data = await R.api.getPokemonSearchAPI({}, { q: query });
    setPokemon(data);
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <Input
          type="search"
          placeholder="Search for a pokemon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key !== "Enter") return;
            search();
          }}
        />
        <button
          onClick={() => {
            search();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <PokemonGrid pokemon={pokemon} />
    </div>
  );
}

function PokemonGrid({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <div className="flex flex-wrap">
      {pokemon.map((p) => (
        <>
          {/* PREVIOUSLY:  */}
          {/* <Link href={`/pokemon/${p.id}`}>
          <PokemonCard pokemon={p} />
        </Link> */}
          <R.PokemonDetail.Link pokemonId={p.id} key={p.id}>
            <SharedPokemonCard pokemon={p} />
          </R.PokemonDetail.Link>
        </>
      ))}
    </div>
  );
}
