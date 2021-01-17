import styled from "styled-components";
import React from "react";
import { contrastColor } from "../utils/color-functions";

type variants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "error"
  | "info"
  | "warning";
type sizes = "smallest" | "small" | "medium" | "large" | "largest";

const fontSize = {
  smallest: "1rem",
  small: "1.2rem",
  medium: "1.6rem",
  large: "2rem",
  largest: "2.4rem",
};

const StyledButton = styled.button<{
  variant: variants;
  size: sizes;
  outlined: boolean;
}>`
  background: ${({ theme, variant, outlined }) =>
    outlined ? theme.common.color : theme[variant].color};
  font-size: ${({ size }) => fontSize[size]};
  border: none;
  color: ${({ theme, variant, outlined }) =>
    outlined ? theme.common.inverseColor : contrastColor(theme[variant].color)};
  padding: 6px 12px;
  border-radius: 36px; /*padding: 6x12/2*/
  outline: none;
  transition: ${({ theme }) => theme.duration.standard} linear;
  cursor: pointer;
  border: 2px solid ${({ theme, variant }) => theme[variant].color};
  &:hover {
    background: ${({ theme, variant, outlined }) =>
      outlined ? theme[variant].color : theme[variant].light};
    color: ${({ theme, variant }) => contrastColor(theme[variant].light)};
    border: 2px solid
      ${({ theme, variant, outlined }) =>
        outlined ? theme[variant].color : theme[variant].light};
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  variant?: variants;
  size?: sizes;
  outlined?: boolean;
  [props: string]: any;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  outlined = false,
  ...props
}: ButtonProps) => (
  <StyledButton variant={variant} size={size} {...props} outlined={outlined}>
    {children}
  </StyledButton>
);

export default Button;
