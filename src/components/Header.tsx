import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;
const Logo = styled.img`
  max-width: 80%;
  width: 215;
  height: auto;
`;
const Title = styled.h1`
  color: #ffcb05;
  font-size: 1.6rem;
  font-weight: 700;
`;

type Props = {
  title?: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Logo src="/images/logo.png" alt="Pokemon" />
      {title && <Title>{title}</Title>}
    </Wrapper>
  );
};
