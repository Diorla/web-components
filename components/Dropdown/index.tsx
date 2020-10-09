import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Icon = ({ show }) => (show ? <MdArrowDropUp /> : <MdArrowDropDown />);

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
export interface DropdownProps {
  main: React.ReactNode;
  // children is implicit
}

const Dropdown: React.FC<DropdownProps> = ({ main, children }) => {
  const [toggleClass, setToggleClass] = useState<string>("");
  const show = toggleClass === "show";
  return (
    <StyledDropdown>
      <StyledMain
        onClick={() => (show ? setToggleClass("hide") : setToggleClass("show"))}
      >
        {main} {<Icon show={show} />}
      </StyledMain>
      {toggleClass && (
        <DropdownMenu className={toggleClass}>{children}</DropdownMenu>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
