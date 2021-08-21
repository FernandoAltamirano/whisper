import React, { memo } from "react";
import { NewTweetWrapper } from "./styles";
import { SectionToWriteTweet } from "../SectionToWriteTweet";
export const NewTweet = memo(() => {
  return (
    <NewTweetWrapper>
      <h3>Home</h3>
      <div>
        <SectionToWriteTweet />
      </div>
    </NewTweetWrapper>
  );
});
