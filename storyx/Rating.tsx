import { FaStar, FaStarHalf } from "react-icons/fa";
import styled from "styled-components";

export interface RatingProps {
  rating: number;
}

const FullStar = styled(FaStar)`
  color: orange;
  margin: 0.1rem;
  font-size: 1.6rem;
`;

const HalfStar = styled(FaStarHalf)`
  color: orange;
  margin: 0.1rem;
  font-size: 1.6rem;
`;

const Rating = ({ rating = 1 }: RatingProps) => {
  const unit = Math.floor(rating);
  const fraction = Math.round(rating - unit);
  const stars = [];
  stars.length = unit || 1;
  stars.fill(<FullStar />);
  if (fraction) stars.push(<HalfStar />);
  return <div>{stars}</div>;
};

export default Rating;
