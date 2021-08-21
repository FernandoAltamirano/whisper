import React from "react";
import { useHistory } from "react-router-dom";
import { NotFoundContainer } from "./styles";
const NotFound = () => {
  const history = useHistory();
  return (
    <NotFoundContainer>
      <img
        src="https://image.flaticon.com/icons/png/512/1082/1082824.png"
        alt=""
      />
      <button onClick={() => history.push("/home")}>Go to home</button>
    </NotFoundContainer>
  );
};

export default NotFound;
