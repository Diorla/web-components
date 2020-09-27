import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button from "../components/Button";
import ButtonProps from "../components/Button/ButtonProps";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "Error",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  children: "Info",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "Warning",
};

export const Styled = Template.bind({});
Styled.args = {
  children: "Styled",
  style: {
    color: "black",
    borderRadius: "25%",
    backgroundImage: "linear-gradient(pink, gray, lightblue)",
  },
};
