import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Link, { LinkProps } from "../../storyx/Link";

export default {
  title: "Storyx/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Underlined = Template.bind({});
Underlined.args = {
  children: "Underlined",
  underlined: true,
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

export const Heavy = Template.bind({});
Heavy.args = {
  children: "Bold",
  heavy: true,
};

export const Small = Template.bind({});
Small.args = {
  children: "Small",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  size: "large",
};
