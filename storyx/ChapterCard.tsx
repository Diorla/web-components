import { FaLock } from "react-icons/fa";
import { FormattedDate } from "react-intl";
import styled from "styled-components";
import Text from "./Text";

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

const Start = styled.div`
  width: 1.5rem;
`;
const ChapterCard = ({ title, index, date, accessible }: ChapterCardProps) => {
  return (
    <Wrapper>
      <Start>
        <Text color="primary" size="medium" weight="bolder">
          {index}
        </Text>
      </Start>
      <Center>
        <Text color="primary" size="medium" weight="bolder">
          {title}
        </Text>
        <Text color="primary" size="small">
          <FormattedDate
            value={date}
            year="numeric"
            month="short"
            day="2-digit"
          />
        </Text>
      </Center>
      <End>
        <Text color="primary">{!accessible && <FaLock />}</Text>
      </End>
    </Wrapper>
  );
};

export default ChapterCard;
