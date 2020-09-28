import { Typography } from "styled-components";

const typography: Typography = {
  fontFamily: [
    "-apple-system",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Apple Color Emoji",
  ].join(", "),
  fontSize: {
    max: "1.5em",
    large: "1.125em",
    medium: "1em",
    small: "0.875em",
    min: "0.75em",
    link: "0.875em",
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
    subtitle: "",
  },
  fontWeight: {
    light: 300,
    main: 400,
    bolder: 500,
    boldest: 700,
  },
};

export default typography;
