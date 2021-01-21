import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import SocialIcon, { SocialIconProps } from "../../storyx/SocialIcon";

export default {
  title: "Storyx/SocialIcon",
  component: SocialIcon,
} as Meta;

const Template: Story<SocialIconProps> = (args) => <SocialIcon {...args} />;

export const Twitter = Template.bind({});

export const Facebook = Template.bind({});
Facebook.args = {
  social: "facebook",
};

export const Whatsapp = Template.bind({});
Whatsapp.args = {
  social: "whatsapp",
};

export const Instagram = Template.bind({});
Instagram.args = {
  social: "instagram",
};
