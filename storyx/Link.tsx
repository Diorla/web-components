import styled from "styled-components";
import variants from "./variants";

type sizes = "small" | "medium" | "large";

export interface LinkProps {
  variant?: variants;
  heavy?: boolean;
  size?: sizes;
  underlined?: boolean;
}

const fontSize = {
  small: "1.2rem",
  medium: "1.4rem",
  large: "1.8rem",
};

const generateGradient = (color: string) => `linear-gradient(${color}, ${color})`;

const Link = styled.a<LinkProps>`
  color: ${({ theme, variant = "primary" }) => theme[variant].color};
  font-weight: ${({ heavy }) => (heavy ? "bold" : "initial")};
  font-size: ${({ size = "medium" }) => fontSize[size]};
  cursor: pointer;
  background-image: ${({ underlined, theme, variant = "primary" }) =>
      underlined
        ? generateGradient(theme[variant].color)
        : generateGradient(theme.common.color)},
    ${({ underlined, theme, variant = "primary" }) =>
      underlined
        ? generateGradient(theme.common.color)
        : generateGradient(theme[variant].color)};
  background-size: 100% 2px, 0 2px;
  background-position: ${({ underlined }) =>
    underlined ? "0 100%, 100% 100%" : "100% 100%, 0 100%"};
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.duration.standard} linear;
  &:hover {
    background-size: 0 2px, 100% 2px;
  }
`;

export default Link;
