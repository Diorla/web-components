//@ts-check
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import storyxTheme from "../storyx-theme";
import Wrapper from "../storyx/Wrapper";
import { FaMoon, FaSun } from "react-icons/fa";

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
  const [isDark, setIsDark] = useState(true);
  const theme = storyxTheme(isDark);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            border: "none",
            padding: 4,
            outline: "none",
            float: "right",
          }}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
        <Story {...context} />
      </Wrapper>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
