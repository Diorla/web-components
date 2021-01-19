import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Search, { SearchProps } from "../../storyx/Search";

export default {
  title: "Storyx/Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Main = Template.bind({});

Main.args = {
  placeholder: "Search here",
};
