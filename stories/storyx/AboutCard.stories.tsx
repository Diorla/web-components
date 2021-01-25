import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AboutCard, { AboutCardProps } from "../../storyx/AboutCard";
import { FormattedMessage } from "react-intl";

export default {
  title: "Storyx/AboutCard",
  component: AboutCard,
} as Meta;

const Template: Story<AboutCardProps> = (args) => <AboutCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: <FormattedMessage id="about" />,
  time: Date.now(),
};
