import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header from "../components/Header";
import components from "./assets/components.svg";
import MenuItem from "../components/Header/MenuItem";
import HeaderProps from "../components/Header/HeaderProps";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Primary: React.FC<HeaderProps> = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Header logo={<img src={components} />}>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
    </Header>
    <div>This is the content</div>
  </div>
);
