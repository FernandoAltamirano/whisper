import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationWrapper,
  NavigationContainer,
  Item,
  ItemWrite,
  Title,
  OptionsContainer,
  Opt,
} from "./styles";
import Home from "../Icons/Home";
import Notification from "../Icons/Notification";
import Logout from "../Icons/Logout";
import Profile from "../Icons/Profile";
import Write from "../Icons/Write";
import Options from "../Icons/Options";
import { useStateValue } from "../../context/ContextProvider";
import { ModalPortal } from "../ModalPortal";
import { SectionToWriteTweet } from "../SectionToWriteTweet";
import { signOut } from "../../firebase";
import logo from "../../images/chat-bubble.png";
export const Navigation = () => {
  const [{ user }, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(false);
  const handleSignOut = () => {
    signOut()
      .then(() => dispatch({ type: "UPDATE_USER", payload: null }))
      .catch((err) => console.error(err.message));
  };

  const handleShowModal = (value) => setShowModal(value);
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <div style={{ textAlign: "left", marginLeft: 15, marginBottom: 40 }}>
          <Link to="/home">
            <img src={logo} alt="" width={30} />
          </Link>
        </div>
        <Item>
          <Link to="/home">
            <Home />
            <Title>Inicio</Title>
          </Link>
        </Item>
        <Item>
          <Link to="/home">
            <Notification />
            <Title>Notificaciones</Title>
          </Link>
        </Item>
        <Item>
          <Link to={`/profile/${user.username}`}>
            <Profile />
            <Title>Perfil</Title>
          </Link>
        </Item>
        <ItemWrite>
          <div onClick={() => handleShowModal(true)}>
            <Write />
            <Title>Write Whisper</Title>
          </div>
          {showModal && (
            <ModalPortal handleShowModal={handleShowModal}>
              <SectionToWriteTweet
                showModal={showModal}
                handleShowModal={handleShowModal}
              />
            </ModalPortal>
          )}
        </ItemWrite>
      </NavigationWrapper>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => handleSignOut()}
      >
        <Logout />
        <Title>Cerrar sesión</Title>
      </Item>
    </NavigationContainer>
  );
};
