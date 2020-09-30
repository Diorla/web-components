export default interface BaseBrandButtonProps {
  /**
   * Choose one of the provided brands
   */
  brand?: "facebook" | "github" | "google" | "instagram" | "twitter";
  /**
   * Resize the button
   */
  fontSize?: "small" | "medium" | "large";
  /**
   * Provide your own brand colour
   */
  brandColor?: string;
  /**
   * Contrast colour for the text or icon
   */
  color?: string;
}
