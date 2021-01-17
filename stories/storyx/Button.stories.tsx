import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "../../storyx/Button";

export default {
  title: "Storyx/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Tertiary",
  variant: "tertiary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  variant: "success",
};

export const Error = Template.bind({});
Error.args = {
  children: "Error",
  variant: "error",
};

export const Info = Template.bind({});
Info.args = {
  children: "Info",
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  variant: "warning",
};

export const Smallest = Template.bind({});
Smallest.args = {
  children: "Smallest",
  size: "smallest",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
};

export const Largest = Template.bind({});
Largest.args = {
  children: "Largest",
  size: "largest",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Outlined",
  outlined: true,
};
