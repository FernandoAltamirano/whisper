import React, { memo } from "react";
import UserIcon from "../Icons/User";
import { Figure } from "./styles";
export const ImageUser = memo(({ image, size }) => {
  return (
    <Figure size={size}>
      {image ? (
        <img src={image} style={{ cursor: "pointer" }} alt="user_photo" />
      ) : (
        <UserIcon size={size} />
      )}
    </Figure>
  );
});
