export default interface HeaderProps {
  /**
   * Control viewpoint to change how menu are displayed
   */
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * logo on the left side of the menu
   */
  logo: React.ReactNode;
  /**
   * The list of menu
   */
  children: React.ReactNode;
}
