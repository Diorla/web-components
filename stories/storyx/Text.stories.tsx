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

export const Colors = () => (
  <div>
    <Text>Default</Text>
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
    <Text color="tertiary">Tertiary</Text>
  </div>
);

export const Sizes = () => (
  <div>
    <Text size="smallest">Smallest</Text>
    <Text size="small">Small</Text>
    <Text>Default</Text>
    <Text size="large">Large</Text>
    <Text size="largest">Largest</Text>
  </div>
);

export const Forms = () => (
  <div>
    <Text>Default</Text>
    <Text form="capitalize">capitalize</Text>
    <Text form="lowercase">LOWERCASE</Text>
    <Text form="uppercase">uppercase</Text>
  </div>
);

export const Weights = () => (
  <div>
    <Text weight="bold">Bold</Text>
    <Text weight="bolder">Bolder</Text>
    <Text>Default</Text>
    <Text weight="lighter">Lighter</Text>
  </div>
);
