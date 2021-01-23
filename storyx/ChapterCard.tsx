import { FaLock } from "react-icons/fa";
import styled from "styled-components";

export interface ChapterCardProps {
  title: string;
  index: number;
  date: Date;
  accessible: boolean;
}

const Wrapper = styled.div`
  display: flex;
  box-shadow: 0 0 0.4rem silver;
  width: 21rem;
  height: 5rem;
  justify-content: space-between;
  padding: 0.6rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.primary.color};
  background: ${({ theme }) => theme.common.color};
`;

const Center = styled.div`
  flex: 1;
  padding-left: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const End = styled.div`
  align-items: flex-end;
  display: flex;
`;

const DateDiv = styled.div`
  color: ${({ theme }) => theme.primary.light};
`;

const ChapterCard = ({ title, index, date, accessible }: ChapterCardProps) => {
  return (
    <Wrapper>
      <div>{index}</div>
      <Center>
        <div>{title}</div>
        <DateDiv>{date.toDateString()}</DateDiv>
      </Center>
      <End>{!accessible && <FaLock />}</End>
    </Wrapper>
  );
};

export default ChapterCard;
