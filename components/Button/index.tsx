import React from "react";
import BaseButton from "./BaseButton";
import ButtonProps from "./ButtonProps";

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
