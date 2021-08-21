import React, { useState } from "react";
import { Layout } from "../Layout";
import { Link } from "react-router-dom";
import ArrowLeft from "../Icons/ArrowLeft";
import Calendar from "../Icons/Calendar";
import { Tweets } from "../Tweets";
import {
  Title,
  UserDetails,
  TweetsContent,
  Date,
  TweetsWrapper,
} from "./styles";
import { ImageUser } from "../ImageUser";
import { ModalProfile } from "../ModalProfile";
import { useStateValue } from "../../context/ContextProvider";

const Profile = () => {
  const [{ user }, _] = useStateValue();
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [file, setFile] = useState(null);
  const [errorImage, setErrorImage] = useState(false);
  const handleChange = (ev) => {
    ev.preventDefault();
    setFile(ev.target.files[0]);
    if (
      ev.target.files[0].type === "image/png" ||
      ev.target.files[0].type === "image/jpeg"
    ) {
      setShowModalProfile(true);
      setErrorImage(false);
    } else {
      setFile(null);
      setErrorImage(true);
    }
  };

  const handleClose = () => setShowModalProfile(false);
  return (
    <Layout>
      <div style={{ border: "1px solid var(--gray2)" }}>
        <Title>
          <Link to="/home">
            <ArrowLeft color={"var(--lightblue)"} size="25px" />
          </Link>
          <div>
            <h4>{user.name}</h4>
          </div>
        </Title>
        <UserDetails>
          <div>
            <label>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <ImageUser image={user.image} size="100px" />
              {showModalProfile && (
                <ModalProfile file={file} handleClose={handleClose} />
              )}
            </label>
            {errorImage && <p>Formato de archivo inválido</p>}
            <h3>{user.name}</h3>
            <span>@{user.username}</span>
            <Date>
              <Calendar color={"var(--secondary)"} />
              <span>Joined </span>
              <time>{user.date}</time>
            </Date>
          </div>
        </UserDetails>
        <TweetsContent>
          <p>Whispers</p>
          <h3>My Whispers</h3>
          <TweetsWrapper>
            <Tweets accessUserTweet={true} />
          </TweetsWrapper>
        </TweetsContent>
      </div>
    </Layout>
  );
};

export default Profile;
