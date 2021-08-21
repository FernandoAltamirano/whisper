import { createPortal } from "react-dom";
import { ContainerModal, WriteWrapper } from "./styles";
import Close from "../Icons/Close";
const Modal = ({ children, handleShowModal }) => {
  return (
    <ContainerModal>
      <WriteWrapper>
        <div style={{ borderBottom: "1px solid var(--gray)" }}>
          <Close
            onClick={() => handleShowModal(false)}
            color={"var(--lightblue)"}
          />
        </div>
        {children}
      </WriteWrapper>
    </ContainerModal>
  );
};

export const ModalPortal = ({ children, handleShowModal }) => {
  return createPortal(
    <Modal handleShowModal={handleShowModal}>{children}</Modal>,
    document.getElementById("modal-root")
  );
};
