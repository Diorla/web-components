import styled from "styled-components";

export interface DividerProps {
  size?: number;
  color?: string;
}
const Divider = styled.div<DividerProps>`
  width: 100%;
  height: ${({ size = 1 }) => size / 10}rem;
  background-color: ${({ color, theme }) => color || theme.shade.medium};
`;

export default Divider;
