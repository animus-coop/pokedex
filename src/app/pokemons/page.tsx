"use client";

import { Header } from "@/components/Header";
import { Pokemon } from "@/components/Pokemon";
import { Search } from "@/components/Search";
import { pokemons } from "@/constants/pokemons";
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

export default function HomeComponents() {
  return (
    <Main>
      <Header title="Nuestro listado de pokemones" />
      <Search text={""} />
      <PokemonList>
        {pokemons.slice(0, 6).map(({ name, image, specs }, index) => (
          <Pokemon
            key={`pokemon_${index}`}
            title={name}
            image={image}
            hp={specs.HP}
            attack={specs.Attack}
            defense={specs.Defense}
            spattack={specs.SpAttack}
            spdefense={specs.SpDefence}
          />
        ))}

        <LoadMore>Cargar más</LoadMore>
      </PokemonList>
    </Main>
  );
}
