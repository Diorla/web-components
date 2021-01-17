import React from "react";
import styled from "styled-components";
import { contrastColor } from "../utils/color-functions";

export interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "small" | "medium" | "large";
}

const avatarSize = {
  small: "2.4rem",
  medium: "2.8rem",
  large: "3.2rem",
};
const StyledAvatar = styled.div<{ size: string }>`
  width: ${({ size }) => avatarSize[size]};
  height: ${({ size }) => avatarSize[size]};
  background-color: ${({ theme }) => theme.shade.medium};
  font-size: 1.6rem;
  text-align: center;
  border-radius: 50%;
  color: ${({ theme }) => contrastColor(theme.shade.medium)};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatar = ({ src, initials, size = "medium" }: AvatarProps) => {
  if (src) return <StyledAvatar as="img" src={src} size={size} />;
  else if (initials) {
    return <StyledAvatar size={size}>{initials.slice(0, 2)}</StyledAvatar>;
  }
  return <StyledAvatar size={size}>SX</StyledAvatar>;
};

export default Avatar;
