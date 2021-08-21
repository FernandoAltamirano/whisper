import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useSelectedImage from "../../hooks/useSelectedImage";
import { ContainerPortal, ModalProfileWrapper, Content } from "./styles";
import Close from "../Icons/Close";
import { updateImageProfile } from "../../firebase";
import { useStateValue } from "../../context/ContextProvider";
import { useHistory } from "react-router-dom";
const Modal = ({ file, handleClose }) => {
  const [imgURL, chargeImage, setImgURL] = useSelectedImage();
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const history = useHistory(null);
  useEffect(() => {
    chargeImage(file);
  }, [file]);

  const handleProfile = (ev) => {
    chargeImage(ev.target.files[0]);
  };

  const handleProfileImage = (ev) => {
    ev.preventDefault();
    setLoading(true);
    imgURL &&
      updateImageProfile(imgURL, user.id).then(() => {
        dispatch({ type: "UPDATE_USER", payload: { ...user, image: imgURL } });
        setImgURL("");
        setLoading(false);
        handleClose();
        history.push("/");
      });
  };
  return (
    <ContainerPortal>
      <ModalProfileWrapper>
        <Content>
          <span onClick={handleClose}>
            <Close color={"var(--lightblue)"} />
          </span>
          <picture>
            <img src={imgURL} alt="New profile" />
          </picture>
          <label>
            Elegir otro archivo
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleProfile}
            />
          </label>
          <div>
            <button disabled={loading} onClick={handleProfileImage}>
              Change image
            </button>
          </div>
        </Content>
      </ModalProfileWrapper>
    </ContainerPortal>
  );
};

export const ModalProfile = ({ file, handleClose }) => {
  return createPortal(
    <Modal file={file} handleClose={handleClose} />,
    document.getElementById("modal-profile-root")
  );
};
