import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

const StyledDiv = styled.div`
  border: 0.1rem solid silver;
  width: 80%;
  min-width: 240px;
  border-radius: 48px;
  display: flex;
  align-items: center;
  margin: auto;
  border-bottom: 0.1rem solid silver;
  background-color: ${({ theme }) => theme.common.color};
  color: ${({ theme }) => theme.common.inverseColor};
`;

const StyledInput = styled.input`
  margin: 0.4rem;
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.6rem;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.common.color};
  color: ${({ theme }) => theme.common.inverseColor};
`;

const StyledIcon = styled(FaSearch)`
  font-size: 1.6rem;
  padding-right: 0.4rem;
  color: ${({ theme }) => theme.common.inverseColor};
`;

export interface SearchProps {
  [props: string]: any;
}
const Search = ({ props }: SearchProps) => {
  const ref = useRef<null | HTMLInputElement>(null);
  return (
    <StyledDiv>
      <StyledInput {...props} ref={ref} type="search" />
      <StyledIcon onClick={() => ref.current?.focus()} />
    </StyledDiv>
  );
};

export default Search;
