import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Logo from "../../storyx/Logo";

export default {
  title: "Storyx/Logo",
  component: Logo,
} as Meta;

export const StyledLogo = () => <Logo>Storyx</Logo>;
