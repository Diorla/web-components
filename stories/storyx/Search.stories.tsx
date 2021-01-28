import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Search, { SearchProps } from "../../storyx/Search";
import { useIntl } from "react-intl";

export default {
  title: "Storyx/Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => {
  const text = useIntl();
  return (
    <Search
      {...args}
      placeholder={text.formatMessage({
        id: args.placeholder || "search",
      })}
    />
  );
};

export const Main = Template.bind({});

Main.args = {
  placeholder: "search",
};
