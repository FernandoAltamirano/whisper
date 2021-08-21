import React from "react";
import { Trends } from "../Trends";
import { Navigation } from "../Navigation";
import { LayoutContainer } from "./styles";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <div>
        <Navigation />
      </div>
      {children}
      <Trends />
    </LayoutContainer>
  );
};
