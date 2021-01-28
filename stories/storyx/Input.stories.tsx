import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { InputProps } from "../../storyx/Input";
import { useIntl } from "react-intl";

export default {
  title: "Storyx/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  const text = useIntl();
  return (
    <Input
      {...args}
      placeholder={text.formatMessage({
        id: args.placeholder || "placeholder",
      })}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic label",
  placeholder: "placeholder",
  type: "email",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  type: "email",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};
