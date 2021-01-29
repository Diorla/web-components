import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Editor from "../Editor";

export default {
  title: "Editor",
  component: Editor,
} as Meta;

export const Example = () => <Editor />;