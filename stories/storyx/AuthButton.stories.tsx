import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AuthButton, { AuthButtonProps } from "../../storyx/AuthButton";

export default {
  title: "Storyx/AuthButton",
  component: AuthButton,
} as Meta;

const Template: Story<AuthButtonProps> = (args) => <AuthButton {...args} />;

export const Facebook = Template.bind({});

export const Google = Template.bind({});
Google.args = {
  type: "google",
};
