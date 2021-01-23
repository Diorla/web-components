import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import Comment, { CommentProps } from "../../storyx/Comment";

export default {
  title: "Storyx/Comment",
  component: Comment,
} as Meta;

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Example = Template.bind({});

Example.args = {
  // profileImage?: string;
  username: "jdoe",
  comment: `Eu aute amet veniam deserunt anim et deserunt sit ad. Non nisi ea sit
  pariatur excepteur laboris quis. Nulla laborum adipisicing est nostrud.
  Cupidatat do veniam cillum ullamco pariatur non nisi dolore adipisicing
  laborum anim eu cillum sint.`,
  sentiment: "like",
  likes: 74,
  replies: 1351,
  // onClickLike: () => void;
  // onClickDisLike: () => void;
  // onClickComment: () => void;
};

export const FunctionalExample = () => {
  const [likes, setLikes] = useState(0);
  const [replies, setReplies] = useState(0);
  const [sentiment, setSentiment] = useState<"like" | "dislike" | undefined>();
  useEffect(() => {
    setLikes(Math.floor(Math.random() * 10000));
    setReplies(Math.floor(Math.random() * 100));
    const sentimentList: Array<"like" | "dislike"> = ["like", "dislike"];
    setSentiment(sentimentList[Math.floor(Math.random() * 3)]);
  }, []);
  return (
    <Comment
      username="jadoe"
      comment="This is a very long comment about something that I like to comment on"
      sentiment={sentiment}
      replies={replies}
      likes={likes}
      onClickLike={() => {
        if (sentiment === "like") {
          setSentiment(undefined);
          setLikes(likes - 1);
        } else {
          setSentiment("like");
          if (sentiment === "dislike") setLikes(likes + 2);
          else setLikes(likes + 1);
        }
      }}
      onClickDislike={() => {
        if (sentiment === "dislike") {
          setSentiment(undefined);
          setLikes(likes + 1);
        } else {
          setSentiment("dislike");
          if (sentiment === "like") setLikes(likes - 2);
          else setLikes(likes - 1);
        }
      }}
      onClickComment={() => console.log("modal for writing comments added")}
      onClickReport={() => console.log("report comment")}
    />
  );
};
