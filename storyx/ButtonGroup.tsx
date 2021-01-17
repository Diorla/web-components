import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  & > button {
    border-radius: 0;
    flex: 1;
  }
  & > button:first-child {
    border-radius: 0.4rem 0 0 0.4rem;
  }
  & > button:last-child {
    border-radius: 0 0.4rem 0.4rem 0;
  }
`;

export default ButtonGroup;
