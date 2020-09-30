import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import BrandButton from "../components/BrandButton";
import BrandButtonProps from "../components/BrandButton/BrandButtonProps";
import { FaCode } from "react-icons/fa";

export default {
  title: "Components/BrandButton",
  component: BrandButton,
  argTypes: {
    brandColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<BrandButtonProps> = (args) => <BrandButton {...args} />;

export const Brand = Template.bind({});
Brand.args = {
  brand: "facebook",
};

export const Customized = Template.bind({});
Customized.args = {
  children: (
    <>
      <span>
        <FaCode />
      </span>{" "}
      Coding
    </>
  ),
  brandColor: "rgb(248, 238, 238)",
  color: "rgb(158, 79, 79)",
};
