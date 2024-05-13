'use client'

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
const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;
const Logo = styled.img`
  max-width: 80%;
`;
const Title = styled.h1`
  color: #ffcb05;
  font-size: 1.6rem;
  font-weight: 700;
`;
const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const InputSearch = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #fff;
  padding: 16px 24px;
  color: #155263;
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;
  border: none;
  &::placeholder {
    color: #155263;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:active,
  &:focus,
  &:focus-visible {
    border: 1px solid #ffcb05;
    box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.1),
      0px 20px 25px -5px rgba(0, 0, 0, 0.1);
    outline-width: 0;
  }
`;
const ButtonImageSearch = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
const ButtonImage = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const PokemonList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
const Pokemon = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: #0e4554;
  width: 100%;
`;
const PokemonTitle = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  border-bottom: 1px solid #155263;
  line-height: normal;
  display: flex;
  padding-bottom: 4px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;
const PokemonDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;
const PokemonImageWrapper = styled.div`
  width: 40%;
  max-width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const PokemonDetails = styled.div`
  display: flex;
  gap: 16px;
`;
const PokemonDetailsRow = styled.div`
  display: flex;
  gap: 8px;
  color: #fff;
  text-align: right;
  font-size: 1.2rem;
  font-weight: 400;
`;
const Label = styled.label`
  min-width: 70px;
`;
const PokemonValueBar = styled.div`
  position: relative;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  height: 14px;
  width: 100%;
`;
const PokemonValue = styled.div`
  position: absolute;
  left: 4px;
  top: 1px;
  color: #0e4554;
  text-align: right;
  font-size: 1rem;
  font-weight: 700;
`;
const PokemonBar = styled.div`
  border-radius: 10px;
  background: #ffcb05;
  height: 100%;
  width: 50%;
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
      <Header>
        <Logo src="/images/logo.png" alt="Pokemon" />
        <Title>Nuestro listado de pokemones</Title>
      </Header>
      <SearchWrapper>
        <InputSearch type="text" placeholder="Buscar por nombre" />
        <ButtonImageSearch>
          <img src="/images/search.svg" alt="Search" />
        </ButtonImageSearch>
      </SearchWrapper>
      <PokemonList>
        <Pokemon>
          <PokemonTitle>
            Venusaur
            <ButtonImage>
              <img src="/images/x.svg" alt="Delete" />
            </ButtonImage>
          </PokemonTitle>
          <PokemonDescription>
            <PokemonImageWrapper>
              <img src="/images/pokemon.png" alt="Nombre del pokemon" />
            </PokemonImageWrapper>
            <PokemonDetails>
              <PokemonDetailsRow>
                <Label>HP</Label>
                <PokemonValueBar>
                  <PokemonValue>80</PokemonValue>
                  <PokemonBar></PokemonBar>
                </PokemonValueBar>
              </PokemonDetailsRow>
            </PokemonDetails>
          </PokemonDescription>
        </Pokemon>
        <LoadMore>Cargar más</LoadMore>
      </PokemonList>
    </Main>
  );
}
