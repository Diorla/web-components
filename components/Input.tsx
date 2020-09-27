import React, { useState } from "react";
import styled from "styled-components";
import dimension from "../theme/dimension";
import palette from "../theme/palette";
import typography from "../theme/typography";
interface BaseInputProps {
  /**
   * Used for feedback
   */
  variant?: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  /**
   * The size of the input
   */
  inputSize?: "small" | "medium" | "large";
}
export interface InputProps extends BaseInputProps {
  /**
   * id for input and label
   */
  id?: string;
  /**
   * If not provided, label will not be added
   */
  label?: string;
  /**
   * input value
   */
  value?: string;
  /**
   * For changing the value of the input
   */
  onChange?: (e: { target: { value: React.SetStateAction<string> } }) => void;
  /**
   * Placeholder
   */
  placeholder?: string;
}

const FormGroup = styled.div`
  font-family: ${typography.fontFamily};
  display: flex;
  flex-direction: column;
`;

const BaseInput = styled.input<BaseInputProps>`
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

const BaseLabel = styled.label`
  margin-bottom: ${dimension.x2};
  text-transform: capitalize;
`;

const Input: React.FC<InputProps> = ({
  label,
  value,
  id,
  onChange,
  variant = "primary",
  inputSize = "medium",
  placeholder,
  ...props
}: InputProps) => {
  const preset = id || "wc-" + Math.floor(Math.random() * 1e12).toString(16);
  return (
    <FormGroup>
      {label && <BaseLabel htmlFor={preset}>{label}</BaseLabel>}
      <BaseInput
        inputSize={inputSize}
        variant={variant}
        value={value}
        onChange={onChange}
        id={label && preset}
        {...props}
      />
    </FormGroup>
  );
};

export default Input;
