import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 3.6rem;
  font-weight: 500;
  font-family: redressed;
  color: ${({ theme }) => theme.primary.color};
`;

interface LogoProps {
  children: React.ReactNode;
}
const Logo = ({ children }: LogoProps) => <StyledDiv>{children}</StyledDiv>;

export default Logo;
