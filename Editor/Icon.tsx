import React from "react";
import {
  FaStar,
  FaQuoteRight,
  FaListOl,
  FaListUl,
  FaCode,
  FaBold,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
import styled from "styled-components";

const Monospace = styled.span`
  font-size: 1.6rem;
  font-family: "Fira Code", monospace;
  font-weight: 500;
`;
const Icon = ({ icon }: { icon?: string }) => {
  switch (icon) {
    // block
    case "H1":
      return <Monospace>H1</Monospace>;
    case "H2":
      return <Monospace>H2</Monospace>;
    case "H3":
      return <Monospace>H3</Monospace>;
    case "H4":
      return <Monospace>H4</Monospace>;
    case "H5":
      return <Monospace>H5</Monospace>;
    case "H6":
      return <Monospace>H6</Monospace>;
    case "Blockquote":
      return <FaQuoteRight />;
    case "UL":
      return <FaListUl />;
    case "OL":
      return <FaListOl />;
    case "Code Block":
      return <FaCode />;
    // Inline
    case "Bold":
      return <FaBold />;
    case "Italic":
      return <FaItalic />;
    case "Underline":
      return <FaUnderline />;
    case "Monospace":
      return <Monospace>tt</Monospace>;
    default:
      return <FaStar />;
  }
};

export default Icon;
