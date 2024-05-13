import { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.svg``;

export const CloseIcon: React.FC<HTMLAttributes<SVGElement>> = ({
  className,
  ...restProps
}) => (
  <Wrapper
    className={`close ${className}`}
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <g opacity="0.6">
      <path
        d="M12 4L4 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 4L12 12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </Wrapper>
);
