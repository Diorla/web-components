import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Fund, { FundProps } from "../../storyx/Fund";

export default {
  title: "Storyx/Fund",
  component: Fund,
} as Meta;

const Template: Story<FundProps> = (args) => <Fund {...args} />;

export const Gem = Template.bind({});
Gem.args = {
  type: "gem",
  value: Math.floor(Math.random() * 1000),
};

export const Coin = Template.bind({});
Coin.args = {
  type: "coin",
  value: Math.floor(Math.random() * 100),
};
