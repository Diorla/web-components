import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Avatar, { AvatarProps } from "../../storyx/Avatar";
import profile from "../assets/profile.jpg";

export default {
  title: "Storyx/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  src: profile,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: "AA",
};

export const NoArgument = Template.bind({});
