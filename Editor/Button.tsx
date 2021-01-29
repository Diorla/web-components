import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledButton = styled.button<{ active: boolean }>`
  color: ${({ active, theme }) =>
    active ? theme.primary.color : theme.common.inverseColor};
  border: none;
  background: transparent;
  outline: none;
`;

const Button = ({
  icon,
  active,
  onClick,
}: {
  icon?: string;
  active: boolean;
  onClick: (e: any) => void;
}) => (
  <StyledButton active={active} onClick={onClick}>
    <Icon icon={icon} />
  </StyledButton>
);

export default Button;
