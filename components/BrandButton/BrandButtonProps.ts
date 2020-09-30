import BaseBrandButtonProps from "./BaseBrandButtonProps";

export default interface BrandButtonProps extends BaseBrandButtonProps {
  /**
   * Use instead of "brand" to provide customized content
   */
  children?: React.ReactNode;
}
