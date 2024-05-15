'use server';
import { getPokemonsList } from "./actions";
import List from "./components/List";

type pokemonType = {
  title: string;
  image: string;
  name: string;
  specs: {
    hp: number;
    attack: number;
    defense: number;
    "special-attack": number;
    "special-defense": number;
  };
}

 
export default async function Page() {
  const data:Array<pokemonType> = await getPokemonsList();
  return <List pokemons={data}></List>
}