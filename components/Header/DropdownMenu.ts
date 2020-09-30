import styled from "styled-components";
import dimension from "../../theme/dimension";
import { show, hide } from "./animation";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${dimension.x8} 0;
  min-width: ${dimension.x128};
  box-shadow: 0 0 ${dimension.x4} silver;
  transform-origin: top;
  &.show {
    animation: ${show} 0.2s linear 1 forwards;
  }
  &.hide {
    animation: ${hide} 0.2s linear 1 forwards;
  }
`;
