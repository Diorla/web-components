import styled from "styled-components";
import dimension from "../../theme/dimension";
import elevation from "../../theme/elevation";
import palette from "../../theme/palette";
import typography from "../../theme/typography";
import BaseButtonProps from "./BAseButtonProps";

export default styled.button<BaseButtonProps>`
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
