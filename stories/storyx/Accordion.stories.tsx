import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Accordion, { AccordionProps } from "../../storyx/Accordion";
import { FormattedMessage } from "react-intl";

export default {
  title: "Storyx/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  expanded: false,
  title: <FormattedMessage id="clickHere" />,
  children: (
    <ol>
      <li>
        <FormattedMessage id="one" />
      </li>
      <li>
        <FormattedMessage id="two" />
      </li>
      <li>
        <FormattedMessage id="three" />
      </li>
    </ol>
  ),
};

export const Open = Template.bind({});
Open.args = {
  expanded: true,
  title: <FormattedMessage id="clickHere" />,
  children: (
    <div>
      <FormattedMessage id="lorem" />
    </div>
  ),
};
