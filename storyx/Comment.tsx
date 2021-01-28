import styled from "styled-components";
import Avatar from "./Avatar";
import Text from "./Text";
import Link from "./Link";
import {
  FaRegComment,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const StyledComment = styled.div`
  font-size: 1.2rem;
  width: clamp(240px, 90%, 480px);
`;

const User = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-left: 0.4rem;
  }
`;

const Content = styled.div`
  margin: 0.4rem 0 0.4rem 3rem;
`;

const Controls = styled.div`
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Contribute = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-right: 1.6rem;
    display: flex;
    align-items: center;
  }
  & a:first-child {
    margin-right: 0.4rem;
  }
  & a:last-child {
    margin-left: 0.4rem;
  }
`;

const LikeThumbs = ({ sentiment, onClick }) =>
  sentiment === "like" ? (
    <FaThumbsUp onClick={onClick} />
  ) : (
    <FaRegThumbsUp onClick={onClick} />
  );
const DisLikeThumbs = ({ sentiment, onClick }) =>
  sentiment === "dislike" ? (
    <FaThumbsDown onClick={onClick} />
  ) : (
    <FaRegThumbsDown onClick={onClick} />
  );

export interface CommentProps {
  profileImage?: string;
  username: string;
  comment: string;
  sentiment: "like" | "dislike" | undefined;
  likes: number;
  replies: number;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickComment: () => void;
  onClickReport: () => void;
}
export default function Comment({
  profileImage,
  username,
  comment,
  sentiment,
  likes,
  replies,
  onClickLike,
  onClickDislike,
  onClickComment,
  onClickReport,
}: CommentProps) {
  return (
    <StyledComment>
      <User>
        <Avatar src={profileImage} size="smallest" />
        <Text color="primary" weight="bolder">
          {username}
        </Text>
      </User>
      <Content>{comment}</Content>
      <Controls>
        <Contribute>
          <div>
            <Link>
              <LikeThumbs sentiment={sentiment} onClick={onClickLike} />
            </Link>
            <Text color="primary" size="small">
              {likes}
            </Text>
            <Link>
              <DisLikeThumbs sentiment={sentiment} onClick={onClickDislike} />
            </Link>
          </div>
          <Link>
            {replies} <FaRegComment onClick={onClickComment} />
          </Link>
        </Contribute>
        <Link onClick={onClickReport}>
          <FormattedMessage id="report" />
        </Link>
      </Controls>
    </StyledComment>
  );
}
