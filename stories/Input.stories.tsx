import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import Input, { InputProps } from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

export const WithLabel = (args: InputProps) => <Input {...args} />;
WithLabel.args = {
  label: "Name",
  value: "",
  placeholder: "labelled",
};

export const WithoutLabel = (args: InputProps) => <Input {...args} />;
WithoutLabel.args = {
  value: "",
  placeholder: "unlabelled",
};

export const Disabled = (args: InputProps) => <Input {...args} />;
Disabled.args = {
  value: "",
  placeholder: "disabled",
  disabled: true,
};

export const TextArea = (args: InputProps) => <Input {...args} />;
TextArea.args = {
  label: "What is your message",
  value: "",
  placeholder: "Once upon a time...",
  multiline: true,
};

export const Feedback = () => {
  const [email, setEmail] = useState("");
  const regex = RegExp(".+@.+.com");
  const variant = regex.test(email) ? "success" : "error";
  return (
    <div>
      <div>Type in a valid email to see the effect</div>
      <Input
        label="email"
        value={email}
        variant={variant}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@myemail.com"
      />
    </div>
  );
};
