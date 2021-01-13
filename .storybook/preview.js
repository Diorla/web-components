//@ts-check
import { ThemeProvider } from "styled-components";
import React from "react";
import { lightTheme } from "../storyxTheme";
import Wrapper from "../storyx/Wrapper";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      // array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
    },
  },
};

// .storybook/preview.js

const withThemeProvider = (Story, context) => {
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
function storyxTheme() {
  throw new Error("Function not implemented.");
}
