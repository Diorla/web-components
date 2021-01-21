import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Rating, { RatingProps } from "../../storyx/Rating";

export default {
  title: "Storyx/Rating",
  component: Rating,
} as Meta;

const Template: Story<RatingProps> = (args) => <Rating {...args} />;

export const Mimimum = Template.bind({});

export const FiveStar = Template.bind({});
FiveStar.args = {
  rating: 5,
};

export const Random = Template.bind({});
Random.args = {
  rating: Math.random() * 5,
};

export const NoZeroStar = Template.bind({});
NoZeroStar.args = {
  rating: 0,
};
