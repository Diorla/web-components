import React from "react";
import styled from "styled-components";
import { contrastColor } from "../utils/color-functions";

export interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "smallest" | "small" | "medium" | "large" | "largest";
}

const avatarSize = {
  smallest: "2.4rem",
  small: "2.8rem",
  medium: "3.2rem",
  large: "3.6rem",
  largest: "7.2rem",
};

const StyledAvatar = styled.div<{ size: string }>`
  width: ${({ size }) => avatarSize[size]};
  height: ${({ size }) => avatarSize[size]};
  background-color: ${({ theme }) => theme.shade.medium};
  font-size: 1.4rem;
  text-align: center;
  border-radius: 50%;
  color: ${({ theme }) => contrastColor(theme.shade.medium)};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatar = ({ src, initials = "SX", size = "medium" }: AvatarProps) => {
  if (src) return <StyledAvatar as="img" src={src} size={size} />;
  return <StyledAvatar size={size}>{initials.slice(0, 2)}</StyledAvatar>;
};

export default Avatar;
