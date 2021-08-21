import React, { useEffect, useState } from "react";
import { LoginWrapper, Links } from "./styles";
import { InputWrapper, Input, ErrorMessage } from "../../styles/GlobalStyles";
import { Link, Redirect, useHistory } from "react-router-dom";
import { getToFirestore, loginUser, onAuthStateChanged } from "../../firebase";
import { useStateValue } from "../../context/ContextProvider";
import { useForm } from "react-hook-form";
import logo from "../../images/chat-bubble.png";
import { Spinner } from "../Spinner";
import { EyeIcon } from "@heroicons/react/solid";
import { EyeOffIcon } from "@heroicons/react/solid";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const history = useHistory(null);
  useEffect(() => {
    onAuthStateChanged(updateUser);
  }, []);
  const updateUser = (user) => {
    return dispatch({ type: "UPDATE_USER", payload: user });
  };
  const setDataAndUser = (email) => {
    getToFirestore(email)
      .then((user) => {
        setLoading(false);
        user && updateUser(user);
      })
      .catch((err) => console.error(err.message));
  };
  const onSubmit = (data) => {
    setLoading(true);
    loginUser(data.Email, data.Password)
      .then(() => {
        history.push("/home");
        setDataAndUser(data.Email);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setInvalidData(true);
        console.log(err.message);
      });
  };

  return (
    <>
      {user ? (
        <Redirect to="/home" />
      ) : loading ? (
        <Spinner />
      ) : (
        <LoginWrapper>
          <Link to="/">
            <img src={logo} width={30} height={30} alt="" />
          </Link>
          <h1>Iniciar sesión en Whisper</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper validate={errors.Email ? false : true}>
              <Input
                placeholder="Correo"
                type="email"
                {...register("Email", {
                  pattern: {
                    value: regularExpression,
                    message: "Formato de email inválido",
                  },
                  required: { value: true, message: "Email inválido" },
                })}
              />
            </InputWrapper>
            {errors.Email && (
              <ErrorMessage>{errors.Email.message}</ErrorMessage>
            )}
            <InputWrapper validate={errors.Password ? false : true}>
              <Input
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                {...register("Password", {
                  minLength: {
                    value: 8,
                    message:
                      "La contraseña debe tener como minimo 8 caracteres",
                  },
                  required: { value: true, message: "Contraseña inválida" },
                })}
              />
              {showPassword ? (
                <EyeOffIcon
                  color="rgba(200, 200, 200)"
                  cursor="pointer"
                  width="21"
                  height="21"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeIcon
                  color="rgba(200, 200, 200)"
                  cursor="pointer"
                  width="21"
                  height="21"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </InputWrapper>
            {errors.Password && (
              <ErrorMessage>{errors.Password.message}</ErrorMessage>
            )}

            {invalidData && (
              <ErrorMessage>Email y/o contraseña incorrectas</ErrorMessage>
            )}
            <button
              style={{ width: "100%", marginTop: "1em" }}
              disabled={loading}
            >
              Iniciar sesión
            </button>
          </form>

          <Links>
            <Link style={{ opacity: ".5", cursor: "default" }} to="/login">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link to="/register">Registrate en Whisper</Link>
          </Links>
        </LoginWrapper>
      )}
    </>
  );
};

export default Login;
