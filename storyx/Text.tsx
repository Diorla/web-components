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
  | "text";

type sizes = "smallest" | "small" | "medium" | "large" | "largest";

type colors = "common" | "primary" | "secondary" | "tertiary";

type forms = "uppercase" | "capitalize" | "lowercase" | "none";

type weights = "normal" | "bold" | "lighter" | "bolder";

const fontSize = {
  smallest: "1.2rem",
  small: "1.4rem",
  medium: "1.6rem",
  large: "1.8rem",
  largest: "2rem",
};

const fontWeights = {
  bold: 800,
  bolder: 600,
  normal: 400,
  lighter: 300,
};
export interface TextProps {
  /**
   * One of the various typography
   */
  variant?: variants;
  /**
   * Applies only to `<Text/>`, set different sizes
   */
  size?: sizes;
  /**
   * Text-transform `<Text/>`
   */
  form?: forms;
  /**
   * Change `<Text/>` color
   */
  color?: colors;
  /**
   * Changes `<Text/>` boldness
   */
  weight?: weights;
  children: React.ReactNode;
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

export const StyledText = styled.div<{
  size: sizes;
  color: colors;
  form: forms;
  weight: weights;
}>`
  font-size: ${({ size }) => fontSize[size]};
  color: ${({ theme, color }) =>
    color === "common" ? theme[color].inverseColor : theme[color].color};
  text-transform: ${({ form }) => form};
  font-weight: ${({ weight }) => fontWeights[weight]};
`;

const Text: React.FC<TextProps> = ({
  variant = "text",
  children,
  important,
  size = "medium",
  form = "none",
  weight = "normal",
  color = "common",
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
  else
    return (
      <StyledText
        size={size}
        form={form}
        color={color}
        weight={weight}
        {...props}
      >
        {children}
      </StyledText>
    );
};

export default Text;
