import React from "react";
import styled from "styled-components";
import elevation from "../theme/elevation";
import palette from "../theme/palette";
import typography from "../theme/typography";
import dimension from "../theme/dimension";
interface BaseButtonProps {
  /**
   * Different colour codes to denote the importance or use of the button.
   */
  variant: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  /**
   * The size of the button
   */
  size: "small" | "medium" | "large";
  /**
   * Shadows, determining how raised the button should appear. 0 means no elevation, maximum is 10
   */
  elevation: number;
}

export interface ButtonProps extends BaseButtonProps {
  /**
   * Accept react nodes like string, or another elements like icons.
   */
  children: React.ReactNode;
}

const BaseButton = styled.button<BaseButtonProps>`
  font-family: ${typography.fontFamily};
  font-size: ${(props) => typography.fontSize[props.size]};
  background: ${(props) => palette[props.variant].main};
  color: ${(props) => palette[props.variant].text};
  box-shadow: ${(props) => elevation[props.elevation]};
  border: 0;
  border-radius: ${dimension.x4};
  cursor: pointer;
  display: inline-block;
  transition: 0.2s linear;
  padding: ${dimension.x4} ${dimension.x8};
  text-transform: uppercase;
  &:hover {
    background: ${(props) => palette[props.variant].dark};
    ${(props) =>
      props.elevation > 0
        ? elevation[props.elevation - 1]
        : elevation[props.elevation]};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  elevation = 0,
  children,
  ...props
}) => {
  return (
    <BaseButton size={size} variant={variant} elevation={elevation} {...props}>
      {children}
    </BaseButton>
  );
};

export default Button;
