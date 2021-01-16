import { darken, lighten } from "./utils/color-functions";
import { StoryxTheme } from "styled-components";

const breakpoints = {
  xs: 320,
  sm: 640,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const font = {
  family:
    "'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
};
const primary = {
  //reddish
  color: "#cb4019",
  dark: darken("#cb4019"),
  light: lighten("#cb4019"),
};
const secondary = {
  //amber
  color: "#cb9319",
  dark: darken("#cb9319"),
  light: lighten("#cb9319"),
};
const tertiary = {
  //bluish
  color: "#194bcb",
  dark: darken("#194bcb"),
  light: lighten("#194bcb"),
};
const error = {
  color: "#e83c3d",
  dark: darken("#e83c3d"),
  light: lighten("#e83c3d"),
};
const warning = {
  color: "#ffac03",
  dark: darken("#ffac03"),
  light: lighten("#ffac03"),
};
const info = {
  color: "#17b0f1",
  dark: darken("#17b0f1"),
  light: lighten("#17b0f1"),
};
const success = {
  color: "#329b52",
  dark: darken("#329b52"),
  light: lighten("#329b52"),
};
const duration = {
  shortest: "175ms",
  short: "220ms",
  standard: "250ms",
  long: "280ms",
  longest: "325ms",
};
const zIndex = {
  appbar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
// 9
export const darkTheme: StoryxTheme = {
  shade: {
    close: lighten("#999"),
    medium: lighten("#999", 0.3),
    distant: lighten("#999", 0.5),
  },
  common: {
    color: "#333333",
    inverseColor: "#ffffff",
  },
  breakpoints,
  font,
  primary,
  secondary,
  tertiary,
  error,
  warning,
  info,
  success,
  duration,
  zIndex,
};

export const lightTheme: StoryxTheme = {
  shade: {
    close: darken("#999"),
    medium: darken("#999", 0.3),
    distant: darken("#999", 0.5),
  },
  common: {
    color: "#ffffff",
    inverseColor: "#000000",
  },
  breakpoints,
  font,
  primary,
  secondary,
  tertiary,
  error,
  warning,
  info,
  success,
  duration,
  zIndex,
};
const storyxTheme = (isDarkMode?: boolean) =>
  isDarkMode ? darkTheme : lightTheme;

export default storyxTheme;
