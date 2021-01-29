import styled from "styled-components";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.common.inverseColor}0a;
  z-index: ${({ theme }) => theme.zIndex.appbar};
`;

export default Toolbar;
