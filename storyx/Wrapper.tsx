import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }
`;

const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.family};
  background-color: ${({ theme }) => theme.common.color};
  color: ${({ theme }) => theme.common.inverseColor};
  font-size: 10px;
  min-height: 200px;
`;

export default ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    {children}
  </StyledWrapper>
);
