import styled from "styled-components";
import dimension from "../../theme/dimension";
import palette from "../../theme/palette";
import typography from "../../theme/typography";
import BaseInputProps from "./BaseInputProps";

export default styled.input<BaseInputProps>`
  font-family: ${typography.fontFamily};
  font-size: ${(props) => typography.fontSize[props.inputSize]};
  border: none;
  box-shadow: inset 0 0 ${dimension.x2} black;
  padding: ${dimension.x4} ${dimension.x8};
  outline: none;
  &:focus {
    box-shadow: inset 0 0 ${dimension.x2}
      ${(props) => palette[props.variant].dark};
  }
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    font-style: italic;
  }
`;
