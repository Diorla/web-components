import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import TextArea from "../../storyx/TextArea";

export default {
  title: "Storyx/TextArea",
  component: TextArea,
} as Meta;

export const Input = () => <TextArea rows={5} />;
