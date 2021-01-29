import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Editor, { EditorProps } from "../Editor";

export default {
  title: "Editor",
  component: Editor,
} as Meta;

export const Example = () => <Editor />;

const Template: Story<EditorProps> = (args) => <Editor {...args} />;

export const DynamicToolbar = Template.bind({});
DynamicToolbar.args = {
  blockStyles: ["header-one", "header-two", "blockquote"],
  inlineStyles: ["BOLD", "UNDERLINE", "ITALIC"],
};
