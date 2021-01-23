import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.shade.distant};
  width: 100%;
  resize: vertical;
  background: ${({ theme }) => theme.common.inverseColor}05;
  color: ${({ theme }) => theme.common.inverseColor};
  outline: none;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 1.6rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.shade.close};
    background: transparent;
  }
`;

const TextArea = ({ ...props }: { [props: string]: any }) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
