import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AboutCard, { AboutCardProps } from "../../storyx/AboutCard";

export default {
  title: "Storyx/AboutCard",
  component: AboutCard,
} as Meta;

const Template: Story<AboutCardProps> = (args) => <AboutCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "Did this and that",
  time: new Date(),
};
