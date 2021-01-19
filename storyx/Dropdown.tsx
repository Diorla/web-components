import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const slideDown = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

const slideUp = keyframes`
  from {
    transform: scaleY(1);
  }

  to {
    transform: scaleY(0);
  }
`;

const StyledDropDown = styled.div<{ right: string; left: string }>`
  font-size: 1.6rem;
  font-weight: bold;
  position: relative;
  right: ${({ right }) => (right ? right : "initial")};
  left: ${({ left }) => (left ? left : "initial")};
`;

const DropdownMain = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div<{ expanded: boolean }>`
  position: fixed;
  tranform-origin: top;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)}
    ${({ theme }) => theme.duration.standard} linear forwards;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 0.2rem;
  padding: 0.8rem;
  font-weight: initial;
  min-width: 20rem;
  transform-origin: top;
  background: ${({ theme }) => theme.common.color};
  & > *:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export interface DropdownProps {
  main: React.ReactNode;
  children: React.ReactNode;
  right?: string;
  left?: string;
}

const DropdownIcon = ({ expanded }: { expanded: boolean }) =>
  expanded ? <FaCaretUp /> : <FaCaretDown />;

const Dropdown = ({ main, children, left = "", right = "" }: DropdownProps) => {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledDropDown right={right} left={left}>
      <DropdownMain
        onClick={() => {
          setExpanded(!expanded);
          setLoaded(true);
        }}
      >
        {main}
        <DropdownIcon expanded={expanded} />
      </DropdownMain>
      {loaded && (
        <DropdownList
          expanded={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {children}
        </DropdownList>
      )}
    </StyledDropDown>
  );
};

export default Dropdown;
