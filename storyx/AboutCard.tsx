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
  border: 1px solid transparent;
  &:hover {
    box-shadow: 0 0 0.2rem;
  }
  &:active {
    box-shadow: none;
    border: 1px solid silver;
  }
`;

const AboutCard = ({ title, time }: AboutCardProps) => (
  <Card>
    <Text color="primary">{title}</Text>
    <Text variant="subtext">{time.toDateString()}</Text>
  </Card>
);

export default AboutCard;
