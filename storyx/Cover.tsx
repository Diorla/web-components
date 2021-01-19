import styled from "styled-components";

export interface CoverProps {
  size?: number;
  background?: string;
}

const Cover = styled.div<CoverProps>`
  width: ${({ size = 20 }) => size}rem;
  height: ${({ size = 20 }) => size * 1.5}rem;
  background-image: ${({ background }) => "url(" + background + ")"};
  background-position: center;
  background-size: cover;
  background-color: ${({ theme }) => theme.shade.medium};
`;

export default Cover;
