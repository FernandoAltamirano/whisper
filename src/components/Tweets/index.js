import React from "react";
import { Tweet } from "./Tweet";
import { useStateValue } from "../../context/ContextProvider";
import useWhispers from "../../hooks/useWhispers";
import { MiniSpinner } from "../MiniSpinner";
export const Tweets = ({ accessUserTweet }) => {
  const [{ user }] = useStateValue();
  const { whispers, loading } = useWhispers(accessUserTweet);
  return (
    <>
      {loading ? (
        <MiniSpinner />
      ) : (
        <>
          <Tweet
            username="FernandoAltamirano"
            imgURL="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            content="Welcome to Whisper, I used the Twitter layout with some changes to build this interface😁. You can add emojis, upload images and gifs.Also you can use the option 'PERFIL' and see your posts and change your image profile 👨‍💻"
            // imageUser={user.image}
          />

          {whispers?.map((whisper) => (
            <Tweet
              key={whisper.id}
              username={whisper.data().username}
              likes={whisper.data().likes}
              comments={whisper.data().comments}
              date={whisper.data().date}
              imgURL={whisper.data().imgURL}
              content={whisper.data().content}
              imageUser={user.image}
            />
          ))}
        </>
      )}
    </>
  );
};
