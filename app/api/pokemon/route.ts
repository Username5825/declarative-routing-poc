import { getAllPokemons } from "@/lib/utils/pokemon";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") ?? "";
  const limit = url.searchParams.get("limit") ?? 10;
  return NextResponse.json(await getAllPokemons(+limit, q));
}
