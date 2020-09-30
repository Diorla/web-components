import styled from "styled-components";
import dimension from "../../theme/dimension";
import palette from "../../theme/palette";

export default styled.a`
  text-decoration: none;
  color: ${palette.text.link}; /*cornflower blue*/
  padding: ${dimension.x8};
  &:hover {
    color: ${palette.text.hover};
  }
`;
