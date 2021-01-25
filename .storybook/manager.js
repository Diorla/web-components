import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import brandImage from "../stories/assets/icon-red-amber.svg";

const brand = create({
  base: "light",
  brandTitle: "My custom storybook",
  brandUrl: "https://adeolaade.com",
  brandImage,
});

addons.setConfig({
  theme: brand,
});
