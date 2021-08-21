import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStateValue } from "../../context/ContextProvider";
import { onAuthStateChanged } from "../../firebase";
import {
  PrincipalWrapper,
  Text,
  ButtonOutline,
  ImageContainer,
  ContentWrapper,
  H1,
} from "./styles";
import logo from "../../images/chat-bubble.png";

const Principal = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(updateUser);
  }, []);
  const updateUser = (user) => {
    return dispatch({ type: "UPDATE_USER", payload: user });
  };
  return (
    <>
      {user ? (
        <Redirect to="/home" />
      ) : (
        <PrincipalWrapper>
          <ContentWrapper>
            <img src={logo} width={30} height={30} alt="whisper logo" />
            <H1>Bienvenido a Whisper</H1>
            <Text>Inicia ahora mismo...</Text>
            <Link to="/register">
              <button>Regístrate</button>
            </Link>
            <Link to="/login">
              <ButtonOutline>Iniciar Sesión</ButtonOutline>
            </Link>
          </ContentWrapper>
          <ImageContainer>
            <img
              src="https://www.xtrafondos.com/descargar.php?id=3341&resolucion=3840x2160"
              alt=""
            />
          </ImageContainer>
        </PrincipalWrapper>
      )}
    </>
  );
};

export default Principal;
