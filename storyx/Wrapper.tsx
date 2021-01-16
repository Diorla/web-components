import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { contrastColor } from "../utils/color-functions";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }
`;

const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  background-color: ${({ theme }) => theme.common};
  color: ${({ theme }) => contrastColor(theme.common)};
  font-size: 10px;
  min-height: 200px;
`;

export default ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    {children}
  </StyledWrapper>
);
