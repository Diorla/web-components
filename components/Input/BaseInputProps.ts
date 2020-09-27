export default interface BaseInputProps {
  /**
   * Used for feedback
   */
  variant?: "primary" | "secondary" | "error" | "info" | "warning" | "success";
  /**
   * The size of the input
   */
  inputSize?: "small" | "medium" | "large";
}
