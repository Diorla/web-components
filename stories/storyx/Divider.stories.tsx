import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Divider, { DividerProps } from "../../storyx/Divider";

export default {
  title: "Storyx/Divider",
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Basic = Template.bind({});

export const TenPixel = Template.bind({});
TenPixel.args = {
  size: 10,
};

export const SuperRed = Template.bind({});
SuperRed.args = {
  color: "red",
};
