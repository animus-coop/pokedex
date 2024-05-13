import { CloseIcon } from "@/components/CloseIcon";
import { PokemonScoreBar } from "@/components/PokemonScoreBar";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  padding: 16px;
  flex-direction: column;
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
  @media (max-width: 400px) {
    flex-direction: column;
  }
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
  flex-direction: column;
  gap: 4px;
  flex: 1;
  width: 100%;
`;
 
const ButtonImage = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  color: white;
  &:hover, &:focus-visible, &.focus{
    opacity: 1;
  }
`;

type Props = {
  title: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
  spattack: number;
  spdefense: number;
};

export const Pokemon: React.FC<Props> = ({
  title,
  image,
  hp,
  attack,
  defense,
  spattack,
  spdefense,
}) => {
  return (
    <Wrapper>
      <PokemonTitle>
        {title}
        <ButtonImage aria-label="Remove pokemon">
          <CloseIcon />
        </ButtonImage>
      </PokemonTitle>
      <PokemonDescription>
        <PokemonImageWrapper>
          <img src={image} alt={title} />
        </PokemonImageWrapper>
        <PokemonDetails>
          <PokemonScoreBar label='HP' value={hp} />
          <PokemonScoreBar label='Attack' value={attack} />
          <PokemonScoreBar label='Defense' value={defense} />
          <PokemonScoreBar label='Sp-attack' value={spattack} />
          <PokemonScoreBar label='Sp-defense' value={spdefense} />
        </PokemonDetails>
      </PokemonDescription>
    </Wrapper>
  );
};
