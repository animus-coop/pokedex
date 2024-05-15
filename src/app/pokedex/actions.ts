"use server";
import { formatPokemons } from "./utils";

export async function getPokemonsList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=250", { cache: 'force-cache' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch pokemons');
  }
  const data:any = await res.json();

  return formatPokemons(data.results);
}