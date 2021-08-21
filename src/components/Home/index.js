import React from "react";
import { NewTweet } from "../NewTweet";
import { useStateValue } from "../../context/ContextProvider";
import { Redirect } from "react-router-dom";
import { Layout } from "../Layout";
import { HomeContainer } from "./styles";
import { Tweets } from "../Tweets";
const Home = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      {user ? (
        <Layout>
          <HomeContainer>
            <NewTweet />
            <Tweets accessUserTweet={false} />
          </HomeContainer>
        </Layout>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Home;
