import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Accordion, { AccordionProps } from "../../storyx/Accordion";

export default {
  title: "Storyx/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  expanded: false,
  title: "Click here",
  children: (
    <ol>
      <li>One: Ookan</li>
      <li>Two: Eeji</li>
      <li>Three: Eeta</li>
    </ol>
  ),
};

export const Open = Template.bind({});
Open.args = {
  expanded: true,
  title: "Click here",
  children: (
    <div>
      Eiusmod dolor non enim deserunt anim labore do do dolor aute. Magna sit
      cupidatat laboris proident ex. Anim est cupidatat qui consequat ea. Quis
      est sit qui non. Consequat do nulla consequat in nostrud quis aute irure
      consectetur velit reprehenderit.
    </div>
  ),
};
