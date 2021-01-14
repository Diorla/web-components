//@ts-check
import { ThemeProvider } from "styled-components";
import React from "react";
import storyxTheme from "../storyxTheme";
import Wrapper from "../storyx/Wrapper";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = storyxTheme(Math.random() >= 0.5);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
