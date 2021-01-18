import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Dropdown from "../../storyx/Dropdown";
import Link from "../../storyx/Link";
import Divider from "../../storyx/Divider";

export default {
  title: "Storyx/Dropdown",
  component: Dropdown,
} as Meta;

export const StyledDropdown = () => (
  <div style={{ fontSize: "1.6rem" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>Hello</div>
      <div>Hello</div>
      <Dropdown main={<Link>Dropdown</Link>} right="12.5rem">
        <Link href="./path/to/site">One</Link>
        <Link href="./path/to/site">Two</Link>
        <Divider />
        <Link href="./path/to/site">Three</Link>
        <Link href="./path/to/site">Four</Link>
      </Dropdown>
    </div>
    <div>This is the content</div>
  </div>
);
