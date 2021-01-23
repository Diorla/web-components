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

type sizes = "small" | "smallest" | "medium" | "large" | "largest";
const fontSize = {
  smallest: "1.2rem",
  small: "1.4rem",
  medium: "1.6rem",
  large: "1.8rem",
  largest: "2rem",
};
export interface TextProps {
  variant?: variants;
  important?: boolean;
  children: React.ReactNode;
  size?: sizes;
  [props: string]: any;
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
export const Primary = styled.div<{ important: boolean; size: sizes }>`
  font-size: ${({ size = "medium" }) => fontSize[size]};
  color: ${({ theme }) => theme.primary.color};
  text-transform: ${({ important }) => (important ? "uppercase" : "initial")};
  font-weight: ${({ important }) => (important ? 600 : "initial")};
`;
export const Secondary = styled.div<{ important: boolean; size: sizes }>`
  font-size: ${({ size = "medium" }) => fontSize[size]};
  color: ${({ theme }) => theme.secondary.color};
  text-transform: ${({ important }) => (important ? "uppercase" : "initial")};
  font-weight: ${({ important }) => (important ? 600 : "initial")};
`;
export const Tertiary = styled.div<{ important: boolean; size: sizes }>`
  font-size: ${({ size = "medium" }) => fontSize[size]};
  color: ${({ theme }) => theme.tertiary.color};
  text-transform: ${({ important }) => (important ? "uppercase" : "initial")};
  font-weight: ${({ important }) => (important ? 600 : "initial")};
`;
export const StyledText = styled.div<{ important: boolean; size: sizes }>`
  font-size: ${({ size = "medium" }) => fontSize[size]};
  text-transform: ${({ important }) => (important ? "uppercase" : "initial")};
  font-weight: ${({ important }) => (important ? 600 : "initial")};
`;

const Text: React.FC<TextProps> = ({
  variant,
  children,
  important,
  size,
  ...props
}) => {
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
    return (
      <Primary {...props} important={important} size={size}>
        {children}
      </Primary>
    );
  else if (variant === "secondary")
    return (
      <Secondary {...props} important={important} size={size}>
        {children}
      </Secondary>
    );
  else if (variant === "tertiary")
    return (
      <Tertiary {...props} important={important} size={size}>
        {children}
      </Tertiary>
    );
  else
    return (
      <StyledText {...props} important={important} size={size}>
        {children}
      </StyledText>
    );
};

export default Text;
