//@ts-check
import { ThemeProvider } from "styled-components";
import React from "react";
import storyxTheme from "../storyx-theme";
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
  console.log({ shade: theme.shade });
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
