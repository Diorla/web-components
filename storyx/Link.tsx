import styled from "styled-components";
import variants from "./variants";

type sizes = "small" | "medium" | "large";

export interface LinkProps {
  variant?: variants;
  heavy?: boolean;
  size?: sizes;
}

const fontSize = {
  small: "1.2rem",
  medium: "1.4rem",
  large: "1.8rem",
};

const Link = styled.a<LinkProps>`
  color: ${({ theme, variant = "primary" }) => theme[variant].color};
  font-weight: ${({ heavy }) => (heavy ? "bold" : "initial")};
  font-size: ${({ size }) => (size ? fontSize[size] : fontSize.medium)};
  &:hover {
    color: ${({ theme, variant = "primary" }) => theme[variant].dark};
  }
`;

export default Link;
