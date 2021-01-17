import React from "react";
import styled from "styled-components";
import storyxIcon from "../stories/assets/storyx--icon.svg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 4.8rem;
  color: #cb4019;
  font-family: redressed;
  & > div {
    margin-left: 0.4rem;
  }
`;
const StyledImage = styled.img`
  height: 5rem;
`;

const StoryxPanel = () => (
  <StyledDiv>
    <StyledImage src={storyxIcon} />
    <div>Storyx</div>
  </StyledDiv>
);

export default StoryxPanel;
