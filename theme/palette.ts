import { Palette } from "styled-components";
import shadeColor from "../shadeColor";

const brown = "#ad301a";
const white = "#ffffff";
const lemony = "#ade01a";
const black = "#000000";
const error = "#f44336";
const info = "#2196f3";
const success = "#4caf50";
const warning = "#ff9800";
const dark = "#333333";

const palette: Palette = {
  primary: {
    main: lemony,
    text: black,
    dark: shadeColor(lemony, -0.2),
    light: shadeColor(lemony, 0.2),
  },
  secondary: {
    main: brown,
    text: white,
    dark: shadeColor(brown, -0.2),
    light: shadeColor(brown, 0.2),
  },
  error: {
    main: error,
    text: white,
    dark: shadeColor(error, -0.2),
    light: shadeColor(error, 0.2),
  },
  info: {
    main: info,
    text: white,
    dark: shadeColor(info, -0.2),
    light: shadeColor(info, 0.2),
  },
  success: {
    main: success,
    text: white,
    dark: shadeColor(success, -0.2),
    light: shadeColor(success, 0.2),
  },
  warning: {
    main: warning,
    text: white,
    dark: shadeColor(warning, -0.2),
    light: shadeColor(warning, 0.2),
  },
  text: {
    disabled: "",
    link: "cornflowerblue",
    active: "",
    hover: "",
    selected: "",
    divider: "",
    accent: "",
    // contrast against background
    light: dark,
    dark: white,
  },
  background: {
    light: white,
    dark: dark,
  },
};

export default palette;
