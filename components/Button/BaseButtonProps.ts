export default interface BaseButtonProps {
  /**
   * Different colour codes to denote the importance or use of the button.
   */
  variant?: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  /**
   * The size of the button
   */
  size?: "small" | "medium" | "large";
  /**
   * Shadows, determining how raised the button should appear. 0 means no elevation, maximum is 10
   */
  elevation?: number;
}
