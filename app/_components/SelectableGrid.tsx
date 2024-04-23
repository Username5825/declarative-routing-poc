"use client";
import { useState } from "react";
import Link from "next/link";
import { Pokemon } from "@/lib/utils/types";
import { SharedPokemonCard } from "./shared-pokemon-card";
import { SharedPokemonInfo } from "./shared-pokemon-info";

export function SelectableGrid({ pokemon }: { pokemon: Pokemon[] }) {
  const [selected, setSelected] = useState<Pokemon>();

  return (
    <div className="flex">
      <div className="w-full flex flex-wrap">
        {pokemon.map((p) => (
          <div onClick={() => setSelected(p)} key={p.id}>
            <SharedPokemonCard pokemon={p} />
          </div>
        ))}
      </div>
      {selected && (
        <div className="w-1/2">
          <Link href={`/pokemon/${selected.id}`}>
            <SharedPokemonInfo id={selected.id} />
          </Link>
        </div>
      )}
    </div>
  );
}
