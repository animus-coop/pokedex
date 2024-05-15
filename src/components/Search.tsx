"use client";
import { SearchIcon } from "@/components/SearchIcon";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
  color: #155263;
  cursor: pointer;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  &:hover,
  &:focus,
  &:focus-visible {
    color: red;
  }
`;

type Props = {
  setPokemons: (text:string) => void;
};

export const Search: React.FC<Props> = ({ setPokemons }) => {
  const [text, setText] = useState("");
  return (
    <Wrapper>
      <InputSearch
        onChange={(e: any) => {
          setText(e.target.value);
          setPokemons(e.target.value);
        }}
        type="text"
        placeholder="Buscar por nombre"
      />
      <ButtonImageSearch
        onClick={() => {
          setPokemons(text);
        }}
        aria-label="Search pokemon"
      >
        <SearchIcon />
      </ButtonImageSearch>
    </Wrapper>
  );
};
