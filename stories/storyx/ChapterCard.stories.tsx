import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ChapterCard, { ChapterCardProps } from "../../storyx/ChapterCard";

export default {
  title: "Storyx/ChapterCard",
  component: ChapterCard,
} as Meta;

const Template: Story<ChapterCardProps> = (args) => <ChapterCard {...args} />;

export const Accessible = Template.bind({});

Accessible.args = {
  title: "The title",
  index: 1,
  date: new Date(),
  accessible: true,
};

export const Locked = Template.bind({});

Locked.args = {
  title: "The title",
  index: 2,
  date: new Date(),
  accessible: false,
};
