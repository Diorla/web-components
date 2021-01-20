import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Text, { TextProps } from "../../storyx/Text";

export default {
  title: "Storyx/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Header1 = Template.bind({});
Header1.args = {
  children: "Header 1",
  variant: "h1",
};

export const Header2 = Template.bind({});
Header2.args = {
  children: "Header 2",
  variant: "h2",
};

export const Header3 = Template.bind({});
Header3.args = {
  children: "Header 3",
  variant: "h3",
};

export const Header4 = Template.bind({});
Header4.args = {
  children: "Header 4",
  variant: "h4",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  children: "Subtitle",
  variant: "subtitle",
};

export const Subtext = Template.bind({});
Subtext.args = {
  children: "Subtext",
  variant: "subtext",
};

export const Caption = Template.bind({});
Caption.args = {
  children: "Caption",
  variant: "caption",
};

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

export const StyledText = Template.bind({});
StyledText.args = {
  children: "Default Text",
};

export const Important = Template.bind({});
Important.args = {
  children: "Default Primary Secondary Tertiary",
  important: true,
};
