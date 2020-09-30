import React from "react";
import brands from "../../theme/brands";
import BaseBrandButton from "./BaseBrandButton";
import BrandButtonProps from "./BrandButtonProps";

const BrandButton: React.FC<BrandButtonProps> = ({
  brand,
  children,
  brandColor = "black",
  color = "white",
  fontSize = "medium",
}) => {
  if (brand)
    return (
      <BaseBrandButton brand={brand} fontSize={fontSize}>
        <span>{brands[brand].icon}</span>
        {brand.slice(0, 1).toUpperCase() + brand.slice(1)}
      </BaseBrandButton>
    );
  return (
    <BaseBrandButton fontSize={fontSize} brandColor={brandColor} color={color}>
      {children}
    </BaseBrandButton>
  );
};

export default BrandButton;
