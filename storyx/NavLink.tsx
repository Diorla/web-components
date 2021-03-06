import styled from "styled-components";
import variants from "./variants";

type sizes = "small" | "medium" | "large";

export interface NavLinkProps {
  variant?: variants;
  heavy?: boolean;
  size?: sizes;
  underlined?: boolean;
}

const fontSize = {
  small: "1.4rem",
  medium: "1.6rem",
  large: "1.8rem",
};

const generateGradient = (color: string) =>
  `linear-gradient(${color}, ${color})`;

const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme, variant = "primary" }) => theme[variant].color};
  font-weight: ${({ heavy }) => (heavy ? "bold" : "initial")};
  font-size: ${({ size = "medium" }) => fontSize[size]};
  cursor: pointer;
  background-image: ${({ underlined, theme, variant = "primary" }) =>
      underlined
        ? generateGradient(theme[variant].color)
        : generateGradient(theme.common.color)},
    ${({ theme, variant = "primary" }) =>
      generateGradient(theme[variant].color)};
  background-size: 100% 2px, 0 2px;
  background-position: ${({ underlined }) =>
    underlined ? "0 100%, 100% 100%" : "100% 100%, 0 100%"};
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.duration.standard} linear;
  text-transform: uppercase;
  &:hover {
    background-size: 0 2px, 100% 2px;
  }
`;

export default NavLink;
