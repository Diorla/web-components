import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Cover, { CoverProps } from "../../storyx/Cover";

export default {
  title: "Storyx/Cover",
  component: Cover,
} as Meta;

const Template: Story<CoverProps> = (args) => <Cover {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  background: "https://picsum.photos/420",
};

export const VariableSize = Template.bind({});
VariableSize.args = {
  size: 10,
  background: "https://picsum.photos/150",
};

export const NoArgument = Template.bind({});
