import styled from "styled-components";
import dimension from "../../theme/dimension";
import typography from "../../theme/typography";
import BaseBrandButtonProps from "./BaseBrandButtonProps";
import brands from "../../theme/brands";

export default styled.button<BaseBrandButtonProps>`
  transition: 0.2s linear;
  padding: ${dimension.x8} ${dimension.x16};
  border-radius: ${dimension.x32};
  border: ${dimension.x1} solid;
  cursor: pointer;
  display: flex;
  font-size: ${(props) => typography.fontSize[props.fontSize]};
  font-family: ${typography.fontFamily};
  background: ${(props) =>
    brands[props.brand] ? brands[props.brand].color : props.brandColor};
  color: ${(props) =>
    brands[props.brand] ? brands[props.brand].contrast : props.color};
  & > span {
    margin-right: ${dimension.x4};
  }
  &:hover {
    color: ${(props) =>
      brands[props.brand] ? brands[props.brand].color : props.brandColor};
    background: ${(props) =>
      brands[props.brand] ? brands[props.brand].contrast : props.color};
  }
`;
