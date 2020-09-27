import BaseButtonProps from "./BAseButtonProps";

export default interface ButtonProps extends BaseButtonProps {
  /**
   * Accept react nodes like string, or another elements like icons.
   */
  children: React.ReactNode;
}
