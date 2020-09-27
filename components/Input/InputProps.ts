import BaseInputProps from "./BaseInputProps";

export default interface InputProps extends BaseInputProps {
  /**
   * id for input and label
   */
  id?: string;
  /**
   * If not provided, label will not be added
   */
  label?: string;
  /**
   * input value
   */
  value?: string;
  /**
   * For changing the value of the input
   */
  onChange?: (e: { target: { value: React.SetStateAction<string> } }) => void;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Switches between input and textarea
   */
  multiline?: boolean;
}