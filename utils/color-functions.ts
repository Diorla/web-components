import Color from "color";

/**
 * Returns a darker shade of the color
 * @param color the colour that will be transformed
 * @returns color in hex mode
 * @example darken("#ade01a") //"#8AB315"
 */
export const darken = (color: string) => new Color(color).darken(0.2).hex();

/**
 * Returns a lighter shade of the color
 * @param color the colour that will be transformed
 * @returns color in hex mode
 * @example darken("#ade01a") //"#8AB315"
 */
export const lighten = (color: string) => new Color(color).lighten(0.2).hex();

/**
 * Returns white or black, in order to provide contrast for the colour.
 * @param color the colour that will be transformed
 * @returns color in hex mode
 * @example contrastColor("#ade01a") //"#000000"
 */
export const contrastColor = (color: string) =>
  new Color(color).isDark() ? "#ffffff" : "#000000";
