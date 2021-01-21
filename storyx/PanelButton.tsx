import styled from "styled-components";
import React from "react";
import { darken, lighten } from "../utils/color-functions";
import variants from "./variants";

type sizes = "smallest" | "small" | "medium" | "large" | "largest";

const fontSize = {
  smallest: "1rem",
  small: "1.2rem",
  medium: "1.6rem",
  large: "2rem",
  largest: "2.4rem",
};

const StyledPanelButton = styled.button<{
  variant: variants;
  size: sizes;
}>`
  background: ${({ theme, variant }) => lighten(theme[variant].color, 0.7)};
  font-size: ${({ size }) => fontSize[size]};
  border: none;
  color: ${({ theme, variant }) => darken(theme[variant].color, 0.8)};
  padding: 0.6rem 1.2rem;
  outline: none;
  transition: ${({ theme }) => theme.duration.standard} linear;
  cursor: pointer;
  &:active {
    background: ${({ theme, variant }) => theme[variant].color};
  }
`;

export interface PanelButtonProps {
  children: React.ReactNode;
  variant?: variants;
  size?: sizes;
  outlined?: boolean;
  block?: boolean;
  [props: string]: any;
}

const PanelButton = ({
  children,
  variant = "primary",
  size = "medium",
  outlined = false,
  block = false,
  ...props
}: PanelButtonProps) => (
  <StyledPanelButton variant={variant} size={size} {...props}>
    {children}
  </StyledPanelButton>
);

export default PanelButton;
