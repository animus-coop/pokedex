import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
const PokemonBar = styled.div<{ width: number }>`
  border-radius: 10px;
  background: #ffcb05;
  height: 100%;
  width: ${(props) => props.width}%;
  transition: width 1s ease-in-out;
`;

type Props = {
  label: string;
  value: number;
};

export const PokemonScoreBar: React.FC<Props> = ({ label, value }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <PokemonValueBar>
        <PokemonValue>{value}</PokemonValue>
        <PokemonBar width={value}></PokemonBar>
      </PokemonValueBar>
    </Wrapper>
  );
};
