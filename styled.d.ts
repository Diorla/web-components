import { React } from "react";
import "styled-components";

declare module "styled-components" {
  /**
   * Different colours
   */
  export interface Palette {
    primary: {
      main: string;
      dark: string;
      light: string;
      text: string;
    };
    secondary: {
      main: string;
      dark: string;
      light: string;
      text: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
      text: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
      text: string;
    };
    success: {
      light: string;
      main: string;
      dark: string;
      text: string;
    };
    warning: {
      light: string;
      main: string;
      dark: string;
      text: string;
    };
    text: {
      disabled: string;
      link: string;
      active: string;
      hover: string;
      selected: string;
      divider: string;
      accent: string;
      light: string;
      dark: string;
    };
    // main background
    background: {
      light: string;
      dark: string;
    };
  }
  /**
   * Size and shapes of the text
   */
  export interface Typography {
    fontFamily: string;
    fontSize: {
      max: string;
      large: string;
      medium: string;
      small: string;
      min: string;
      link: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      subtitle: string;
    };
    fontWeight: {
      light: number;
      main: number;
      bolder: number;
      boldest: number;
    };
  }
  export interface Dimension {
    x1: string;
    x2: string;
    x4: string;
    x8: string;
    x16: string;
    x32: string;
    x64: string;
  }
  /**
   * View ports
   */
  export interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
  /**
   * Box-shadows
   */
  export interface Elevation {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
  }
  //z-index
  export interface Priority {
    base: number;
    low: number;
    medium: number;
    high: number;
    max: number;
  }

  //auth/social/brands
  export interface Brands {
    [...props: string]: {
      color: string; // brand colour
      contrast: string; // white or black, to contrast the brand colour
      icon: React.ReactNode;
    };
  }
}
