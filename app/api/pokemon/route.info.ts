import { z } from "zod";
import { PokemonSchema } from "../../../lib/utils/types";

export const Route = {
  name: "PokemonSearchAPI",
  params: z.object({}),
  search: z.object({
    q: z.string(),
  }),
};

export const GET = {
  result: z.array(PokemonSchema),
};
