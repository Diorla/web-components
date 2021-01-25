//@ts-check
import { ThemeProvider } from "styled-components";
import React from "react";
import storyxTheme from "../storyx-theme";
import Wrapper from "../storyx/Wrapper";
import { IntlProvider } from "react-intl";
import dictionary from "../dictionary";

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
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "dark",
        value: "#333333",
      },
    ],
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Change language",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "yo", right: "YO", title: "Yorùbá" },
        // { value: "es", right: "🇪🇸", title: "Español" },
        // { value: "zh", right: "🇨🇳", title: "中文" },
        // { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
};
const withThemeProvider = (Story, context) => {
  const {
    hooks: {
      currentContext: {
        globals: { backgrounds, locale },
      },
    },
  } = context;
  
  const isDark = backgrounds && backgrounds.value === "#333333";
  const theme = storyxTheme(isDark);
  return (
    <IntlProvider
      messages={dictionary[locale]}
      locale={locale}
      defaultLocale="en"
    >
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      </ThemeProvider>
    </IntlProvider>
  );
};
export const decorators = [withThemeProvider];
