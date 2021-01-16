import "styled-components";

declare module "styled-components" {
  export interface StoryxTheme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    font: {
      family: string;
    };
    primary: {
      color: string;
      dark: string;
      light: string;
    };
    secondary: {
      color: string;
      dark: string;
      light: string;
    };
    tertiary: {
      color: string;
      dark: string;
      light: string;
    };
    error: {
      color: string;
      dark: string;
      light: string;
    };
    warning: {
      color: string;
      dark: string;
      light: string;
    };
    info: {
      color: string;
      dark: string;
      light: string;
    };
    success: {
      color: string;
      dark: string;
      light: string;
    };
    shade: {
      close: string;
      medium: string;
      distant: string;
    };
    duration: {
      shortest: string;
      short: string;
      standard: string;
      long: string;
      longest: string;
    };
    zIndex: {
      appbar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
    common: {
      color: string;
      inverseColor: string;
    };
  }
}
