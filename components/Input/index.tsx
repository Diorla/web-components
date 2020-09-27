import React from "react";
import TextArea from "./TextArea";
import BaseInput from "./BaseInput";
import FormGroup from "./FormGroup";
import InputProps from "./InputProps";
import Label from "./Label";

const Input: React.FC<InputProps> = ({
  label,
  value,
  id,
  onChange,
  variant = "primary",
  inputSize = "medium",
  multiline = false,
  placeholder,
  ...props
}: InputProps) => {
  const preset = id || "wc-" + Math.floor(Math.random() * 1e12).toString(16);
  if (multiline)
    return (
      <FormGroup>
        {label && <Label htmlFor={preset}>{label}</Label>}
        <TextArea
          inputSize={inputSize}
          variant={variant}
          value={value}
          onChange={onChange}
          id={label && preset}
          {...props}
        />
      </FormGroup>
    );
  return (
    <FormGroup>
      {label && <Label htmlFor={preset}>{label}</Label>}
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
