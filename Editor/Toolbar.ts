import styled from "styled-components";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.common.color};
  z-index: ${({ theme }) => theme.zIndex.appbar};
  border-bottom: 1px solid ${({ theme }) => theme.shade.medium};
`;

export default Toolbar;
