import React, { useEffect, useState } from "react";
import { OneTweet, Right, Title, Actions, Action } from "./styles";
import Coment from "../Icons/Coment";
import Retweet from "../Icons/Retweet";
import Like from "../Icons/Like";
import { ImageUser } from "../ImageUser";
import { useStateValue } from "../../context/ContextProvider";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
export const Tweet = ({ username, content, likes, comments, date, imgURL }) => {
  const [liked, setLiked] = useState(false);
  const [data, setData] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user.username === username) {
      setData(user);
    } else {
      db.collection("users")
        .where("username", "==", username)
        .get()
        .then((data) => data.docs.map((doc) => doc.data()))
        .then((data) => {
          setData(data[0]);
        });
    }
  }, []);

  return (
    <OneTweet>
      <ImageUser image={data?.image} size="40px" />
      <Right>
        <Title>
          <Link to={`/profile/:${username}`}>
            <h5>{data?.name ? data.name : "Username"}</h5>
          </Link>
          <span>
            @{username} - {date ? format(date.toDate()) : "just now"}
          </span>
        </Title>
        <div>
          <p>{content}</p>
        </div>
        {imgURL !== "" && (
          <picture>
            <img src={imgURL} alt="post file" />
          </picture>
        )}
        <Actions>
          <Action>
            <Coment />
            <span>{comments ? comments.length : "0"}</span>
          </Action>
          <Action>
            <Retweet />
            <span>0</span>
          </Action>
          <Action onClick={() => setLiked(!liked)}>
            <Like
              color={liked ? "rgb(240, 66, 66)" : "none"}
              border={liked ? "rgb(240, 66, 66)" : "currentColor"}
            />
            <span>{likes ? likes : "0"}</span>
          </Action>
        </Actions>
      </Right>
    </OneTweet>
  );
};
