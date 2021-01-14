import React from "react";
import styled from "styled-components";

type variants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "subtext"
  | "caption"
  | "primary"
  | "secondary"
  | "tertiary";

export interface TextProps {
  variant?: variants;
  children: React.ReactNode;
  [key: string]: any;
}

const header = styled.h1`
  font-weight: 400;
`;
export const H1 = styled(header)`
  font-size: 4rem;
`;
export const H2 = styled(header)`
  font-size: 3rem;
`;
export const H3 = styled(header)`
  font-size: 2.5rem;
`;
export const H4 = styled(header)`
  font-size: 2rem;
`;
export const Subtitle = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.shade.distant};
`;
export const Subtext = styled.span`
  font-style: italic;
  font-size: 1.4rem;
`;
export const Caption = styled.figcaption`
  font-size: 1.4rem;
`;
export const Primary = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary.color};
`;
export const Secondary = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.secondary.color};
`;
export const Tertiary = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.tertiary.color};
`;
export const StyledText = styled.div`
  font-size: 1.6rem;
`;

const Text: React.FC<TextProps> = ({ variant, children, props }) => {
  if (variant === "h1") return <H1 {...props}>{children}</H1>;
  else if (variant === "h2") return <H2 {...props}>{children}</H2>;
  else if (variant === "h3") return <H3 {...props}>{children}</H3>;
  else if (variant === "h4") return <H4 {...props}>{children}</H4>;
  else if (variant === "subtitle")
    return <Subtitle {...props}>{children}</Subtitle>;
  else if (variant === "subtext")
    return <Subtext {...props}>{children}</Subtext>;
  else if (variant === "caption")
    return <Caption {...props}>{children}</Caption>;
  else if (variant === "primary")
    return <Primary {...props}>{children}</Primary>;
  else if (variant === "secondary")
    return <Secondary {...props}>{children}</Secondary>;
  else if (variant === "tertiary")
    return <Tertiary {...props}>{children}</Tertiary>;
  else return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
