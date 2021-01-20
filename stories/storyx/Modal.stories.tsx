import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Modal, { ModalProps } from "../../storyx/Modal";
import profile from "../assets/profile.jpg";

export default {
  title: "Storyx/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is content",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "This is content",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "This is content",
  variant: "tertiary",
};

export const Info = Template.bind({});
Info.args = {
  children: "This is content",
  variant: "info",
};
