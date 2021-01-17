import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import ButtonGroup from "../../storyx/ButtonGroup";
import Button from "../../storyx/Button";

export default {
  title: "Storyx/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
} as Meta;

const Template: Story = (args) => <ButtonGroup {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: [
    <Button>Basic</Button>,
    <Button outlined variant="tertiary">
      Outlined
    </Button>,
    <Button block variant="success">
      Block
    </Button>,
  ]
};