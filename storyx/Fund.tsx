import { FaCoins, FaGem } from "react-icons/fa";
import styled from "styled-components";
import { darken, lighten } from "../utils/color-functions";

export interface FundProps {
  /**
   * Monetary type
   */
  type: "gem" | "coin";
  /**
   * Monetary value
   */
  value: number;
}

const Wrapper = styled.div<{ color: string }>`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${({ color, theme }) =>
    theme.common.color === "#ffffff" ? darken(color) : lighten(color)};
  & > svg {
    margin-left: 0.4rem;
  }
`;

export const Gem = ({ value }: { value: number }) => (
  <Wrapper color="#CB19C5">
    {value} <FaGem />
  </Wrapper>
);

export const Coin = ({ value }: { value: number }) => (
  <Wrapper color="#E7EE1F">
    {value} <FaCoins />
  </Wrapper>
);

const Fund = ({ type, value }: FundProps) =>
  type === "gem" ? <Gem value={value} /> : <Coin value={value} />;

export default Fund;
