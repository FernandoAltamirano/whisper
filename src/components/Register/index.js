import React, { useEffect, useRef, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStateValue } from "../../context/ContextProvider";
import {
  onAuthStateChanged,
  registerUser,
  sendToFirestore,
  userExist,
} from "../../firebase";
import { Spinner } from "../Spinner";
import { InputWrapper, Input, ErrorMessage } from "../../styles/GlobalStyles";
import {
  RegisterWrapper,
  Logo,
  Span,
  BottomWrapper,
  Button,
  ButtonWrapper,
  PasswordsWrapper,
} from "../Register/styles";
import logo from "../../images/chat-bubble.png";
import { EyeIcon } from "@heroicons/react/solid";
import { EyeOffIcon } from "@heroicons/react/solid";
const regularExpression = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const history = useHistory(null);
  const [{ user }, dispatch] = useStateValue();
  const password = useRef({});
  password.current = watch("PasswordRegister", "");

  useEffect(() => {
    onAuthStateChanged(updateUser);
  }, []);

  const updateUser = (user) => {
    return dispatch({ type: "UPDATE_USER", payload: user });
  };
  const onSubmit = async (data) => {
    setLoading(true);
    const exist = await userExist(data.Username);
    if (exist.length < 1) {
      registerUser(data.EmailRegister, data.PasswordRegister)
        .then(() => {
          const user = {
            name: data.Name,
            username: data.Username,
            email: data.EmailRegister,
            following: 0,
            followers: 0,
            image: null,
          };
          sendToFirestore(user);
          setLoading(false);
          history.push("/login");
        })
        .catch((err) => {
          setError(err.message);
        });
      setError(null);
    } else {
      setError("El usuario ya esta registrado");
    }
    setLoading(false);
  };

  return (
    <>
      {user ? (
        <Redirect to="/home" />
      ) : loading ? (
        <Spinner />
      ) : (
        <RegisterWrapper>
          <Link to="/">
            <Logo>
              <img src={logo} width={30} height={30} alt="" />
            </Logo>
          </Link>
          <h2>Crea tu cuenta</h2>

          {Error && <ErrorMessage>{Error}</ErrorMessage>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <>
              <InputWrapper validate={errors.Name ? false : true}>
                <Input
                  type="text"
                  placeholder="Nombre Completo"
                  {...register("Name", {
                    required: { value: true, message: "Nombre inválido" },
                  })}
                />
              </InputWrapper>
              {errors.Name && (
                <ErrorMessage>{errors.Name.message}</ErrorMessage>
              )}
              <InputWrapper validate={errors.Username ? false : true}>
                <Input
                  type="text"
                  placeholder="Nombre de usuario"
                  {...register("Username", {
                    required: {
                      value: true,
                      message: "Nombre de usuario inválido",
                    },
                  })}
                />
              </InputWrapper>
              {errors.Username && (
                <ErrorMessage>{errors.Username.message}</ErrorMessage>
              )}
              <InputWrapper validate={errors.EmailRegister ? false : true}>
                <Input
                  type="email"
                  placeholder="Correo"
                  {...register("EmailRegister", {
                    pattern: {
                      value: regularExpression,
                      message: "Formato de correo inválido",
                    },
                    required: { value: true, message: "Email inválido" },
                  })}
                />
              </InputWrapper>
              {errors.EmailRegister && (
                <ErrorMessage>{errors.EmailRegister.message}</ErrorMessage>
              )}
              {/* CONTRASEÑA */}
              <PasswordsWrapper>
                <InputWrapper validate={errors.PasswordRegister ? false : true}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    {...register("PasswordRegister", {
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
                {errors.PasswordRegister && (
                  <ErrorMessage>{errors.PasswordRegister.message}</ErrorMessage>
                )}
                <InputWrapper
                  validate={errors.ConfirmedPassword ? false : true}
                >
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar contraseña"
                    {...register("ConfirmedPassword", {
                      validate: (value) =>
                        value === password.current ||
                        "Contraseñas no coinciden",
                      required: {
                        value: true,
                        message: "Confirmación de contraseña inválida",
                      },
                    })}
                  />
                </InputWrapper>
                {errors.ConfirmedPassword && (
                  <ErrorMessage>
                    {errors.ConfirmedPassword.message}
                  </ErrorMessage>
                )}
              </PasswordsWrapper>
              <BottomWrapper>
                <Span>
                  ¿Ya tienes una cuenta?{" "}
                  <strong>
                    <Link to="/login">Inicia sesión dando click aqui</Link>
                  </strong>
                </Span>
                <ButtonWrapper>
                  <Button>Registrate</Button>
                </ButtonWrapper>
              </BottomWrapper>
            </>
          </form>
        </RegisterWrapper>
      )}
    </>
  );
};

export default Register;
