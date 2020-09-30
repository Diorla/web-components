import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import HeaderProps from "./HeaderProps";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";
import StyledHeader from "./StyledHeader";
import DropdownMenu from "./DropdownMenu";
import breakpoints from "../../theme/breakpoints";

const Header: React.FC<HeaderProps> = ({
  breakpoint = "xs",
  children,
  logo,
}) => {
  const [toggleClass, setToggleClass] = useState<string>("hide");
  const [isSmall, setIsSmall] = useState<boolean>(false);
  console.log(`breakpoint: ${breakpoints[breakpoint]}`);
  const updateViewport = () => {
    const match = window.matchMedia(`(max-width: ${breakpoints[breakpoint]})`)
      .matches;
    setIsSmall(match);
  };
  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, [isSmall]);
  return (
    <StyledHeader isSmall={isSmall}>
      <Logo>
        <MenuItem href="#components">{logo}</MenuItem>
      </Logo>
      {isSmall ? (
        <Dropdown>
          <MenuIcon
            onClick={() =>
              toggleClass === "show"
                ? setToggleClass("hide")
                : setToggleClass("show")
            }
          />
          {toggleClass && (
            <DropdownMenu className={toggleClass}>{children}</DropdownMenu>
          )}
        </Dropdown>
      ) : (
        <Menu>{children}</Menu>
      )}
    </StyledHeader>
  );
};
export default Header;
