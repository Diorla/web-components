import React from "react";
import styled from "styled-components";
import playstore from "../stories/assets/playstore.svg";
import { AiOutlineApple } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const StyledDiv = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 20rem;
  border-radius: 0.8rem;
  padding: 0.8rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.common.color};
  background-color: ${({ theme }) => theme.common.inverseColor};
`;

const StyledImage = styled.img`
  height: 5rem;
`;

const AppStore = styled(AiOutlineApple)`
  width: 5rem;
  height: 5rem;
`;

export interface AppPanelProps {
  store?: "playstore" | "appstore";
  link: string;
}

const AppPanel = ({ store = "playstore", link }: AppPanelProps) => (
  <StyledDiv href={link}>
    <div>
      {store === "appstore" ? <AppStore /> : <StyledImage src={playstore} />}
    </div>
    <div>
      <FormattedMessage id="download" />
      <div>{store === "appstore" ? "APPLE STORE" : "Google PLAY"}</div>
    </div>
  </StyledDiv>
);

export default AppPanel;
