import { z } from "zod";

export const Route = {
  // NB: it was named pokemonId autmatically
  name: "PokemonDetail",
  params: z.object({
    pokemonId: z.number(),
  }),
};
