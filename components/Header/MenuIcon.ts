import { MdMenu } from "react-icons/md";
import styled from "styled-components";
import dimension from "../../theme/dimension";
import palette from "../../theme/palette";
import typography from "../../theme/typography";

export default styled(MdMenu)`
  font-size: ${typography.fontSize.max};
  box-shadow: inset 0 0 ${dimension.x4} silver;
  border-radius: ${dimension.x4};
  padding: ${dimension.x4};
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    box-shadow: inset 0 0 ${dimension.x2} ${palette.secondary.main};
  }
`;
