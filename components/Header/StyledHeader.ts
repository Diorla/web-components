import styled from "styled-components";
import dimension from "../../theme/dimension";
import StyledHeaderProps from "./StyledHeaderProps";

export default styled.div<StyledHeaderProps>`
  height: ${dimension.x64};
  display: flex;
  justify-content: space-between;
  padding: ${dimension.x8};
  align-items: ${(props) => (props.isSmall ? "flex-start" : "center")};
`;
