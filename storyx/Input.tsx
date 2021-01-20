import styled from "styled-components";
import variants from "./variants";

export interface InputProps {
  variant: variants;
  label: string;
  placeholder: string;
  type: string;
  [props: string]: any;
}

const StyledInput = styled.input<InputProps>`
  border: 0.1rem solid
    ${({ theme, variant }) =>
      variant ? theme[variant].color : theme.shade.close};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.common.inverseColor};
  font-size: 1.6rem;
  padding: 0.6rem 0.8rem;
  border-radius: 1.6rem;
  &::placeholder {
    font-size: 1.4rem;
  }
  &:focus {
    box-shadow: 0 0 0.2rem;
  }
  &:invalid {
    box-shadow: 0 0 0.4rem ${({ theme }) => theme.error.color};
  }
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = ({ label, variant, placeholder, type, props }: InputProps) => {
  const randomId = "s" + Math.floor(1000000000 * Math.random());
  return (
    <Wrapper>
      <StyledLabel htmlFor={randomId}>{label}</StyledLabel>
      <StyledInput
        variant={variant}
        id={randomId}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
