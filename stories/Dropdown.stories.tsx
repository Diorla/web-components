import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Dropdown, { DropdownProps } from "../components/Dropdown";
import components from "./assets/components.svg";
import MenuItem from "../components/Header/MenuItem";
import styled from "styled-components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const NewTemplate: Story<DropdownProps> = (args) => (
  <StyledWrapper>
    <div>Hello there</div>
    <Dropdown {...args}>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
      <MenuItem href="#">Link</MenuItem>
    </Dropdown>
  </StyledWrapper>
);

export const Basic = NewTemplate.bind({});
Basic.args = {
  main: "Dropdown",
};

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <MenuItem href="#">Link</MenuItem>
    <MenuItem href="#">Link</MenuItem>
    <MenuItem href="#">Link</MenuItem>
    <MenuItem href="#">Link</MenuItem>
    <MenuItem href="#">Link</MenuItem>
  </Dropdown>
);

export const Text = Template.bind({});
Text.args = {
  main: "Components",
};

export const WithImage = Template.bind({});
WithImage.args = {
  main: <img src={components} style={{ height: 34 }} />,
};
const StyledWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;
