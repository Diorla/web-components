import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import AppPanel, { AppPanelProps } from "../../storyx/AppPanel";

export default {
  title: "Storyx/AppPanel",
  component: AppPanel,
} as Meta;

const Template: Story<AppPanelProps> = (args) => <AppPanel {...args} />;

export const PlayStore = Template.bind({});
PlayStore.args = {
  store: "playstore",
  link: "path/to/google/play",
};

export const AppleStore = Template.bind({});
AppleStore.args = {
  store: "appstore",
  link: "path/to/apple/store",
};
