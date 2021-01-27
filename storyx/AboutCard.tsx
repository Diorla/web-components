import React from "react";
import { FormattedDate } from "react-intl";
import styled from "styled-components";
import Text from "./Text";

export interface AboutCardProps {
  /**
   * The header of the event
   */
  title: string;
  /**
   * When it happened
   */
  time: Date;
}
const Card = styled.div`
  box-shadow: 0 0 0.4rem;
  display: inline-block;
  padding: 1.2rem;
  border-radius: 2.4rem;
  text-align: center;
  cursor: pointer;
  border: 0.1rem solid transparent;
  &:hover {
    box-shadow: 0 0 0.2rem;
  }
  &:active {
    box-shadow: none;
    border: 0.1rem solid silver;
  }
`;

const AboutCard = ({ title, time }: AboutCardProps) => (
  <Card>
    <Text color="primary">{title}</Text>
    <Text variant="subtext">
      <FormattedDate value={time} year="numeric" month="short" day="2-digit" />
    </Text>
  </Card>
);

export default AboutCard;
