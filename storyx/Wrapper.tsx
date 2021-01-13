import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }
`;

const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  font-size: 10px;
`;

export default ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    {children}
  </StyledWrapper>
);
