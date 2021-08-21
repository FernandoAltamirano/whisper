import React, { memo } from "react";
import { FooterWrapper, Text } from "./styles";

const items = [
  "Acerca de",
  "Centro de ayuda",
  "Condiciones de servicio",
  "Politica de privacidad",
  "Pólitica de cookies",
  "Informacion de anuncios",
  "Blog",
  "Empleo",
  "Recurso para marcas",
  "Publicidad",
  "Marketing",
  "Twitter para empresas",
  "Desarrolladores",
  "Guía",
  "Configuracion",
  "© 2021 Twitter, Inc.",
];
export const Footer = memo(() => (
  <FooterWrapper>
    {items.map((i) => (
      <Text key={i}>{i}</Text>
    ))}
  </FooterWrapper>
));
