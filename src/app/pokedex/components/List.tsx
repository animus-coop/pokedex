"use client";
import { Header } from "@/components/Header";
import { Pokemon } from "@/components/Pokemon";
import { Search } from "@/components/Search";
import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px;
  min-height: 100vh;
  background: #155263;
  max-width: 500px;
  margin: 0 auto;
`;

const PokemonList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const LoadMore = styled.button`
  border: 1px solid #ffcb05;
  border-radius: 60px;
  background: #ffcb05;
  color: #134f60;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 12px 24px;
  margin-top: 16px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    border: 1px solid #ffcb05;
    background-color: #134f60;
    color: #ffcb05;
    box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.1),
      0px 20px 25px -5px rgba(0, 0, 0, 0.1);
    outline-width: 0;
  }
`;

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

export default function List({pokemons}: {
  pokemons: Array<pokemonType>
}) {
  const [list, setList] = useState(pokemons.slice(0, 9));
  const [page, setPage] = useState(1);
  const filterPokemon = (text: string) => {
    if (text) {
      const results = pokemons.filter((pokemon:any) => {
        return pokemon.name.includes(text)
      });
      setList(results.slice(0, 9));
    } else {
      setList(pokemons.slice(0, 9));
    }
  }
  const loadMore = () => {
    const currentPage = page + 1;
    const fetchThisPokemons = pokemons.slice((9 * currentPage) - 9, 9 * currentPage);
    setList((list) => list.concat(fetchThisPokemons));
    setPage(currentPage);
  };
  
  return (
    <Main>
      <Header title="Nuestro listado de pokemones" />
      <Search setPokemons={filterPokemon} />
      <PokemonList>
          {list.map(({ name, image, specs }, index) => (
            <Pokemon
              key={`pokemon_${index}`}
              title={name}
              image={image}
              hp={specs.hp}
              attack={specs.attack}
              defense={specs.defense}
              spattack={specs["special-attack"]}
              spdefense={specs["special-defense"]}
            />
          ))}
          <LoadMore onClick={loadMore}>Cargar más</LoadMore>
      </PokemonList>
    </Main>
  );
}
