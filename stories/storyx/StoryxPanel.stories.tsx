import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import StoryxPanel from "../../storyx/StoryxPanel";

export default {
  title: "Storyx/StoryxPanel",
  component: StoryxPanel,
} as Meta;

export const Main = () => <StoryxPanel />;

Main.parameters = {
  controls: { hideNoControlsWarning: true },
};
