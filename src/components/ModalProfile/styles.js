import styled from "styled-components";

export const ContainerPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalProfileWrapper = styled.div`
  max-width: 500px;
  position: relative;
  margin: 10vh auto;
  padding: 5vh 0;
  width: 90%;
  background-color: var(--white);
  border-radius: 20px;
  picture {
    text-align: center;
    margin-top: 20px;
    img {
      border-radius: 9999px;
      object-fit: cover;
      width: 200px;
      height: 200px;
    }
  }
  label {
    border: 1px solid var(--lightblue);
    font-size: 12px;
    border-radius: 20px;
    color: var(--lightblue);
    margin: 10px auto;
    padding: 5px 10px;
    transition: 450ms all;
    cursor: pointer;
    &:hover {
      background-color: var(--lightblue);
      color: var(--white);
    }
  }
  div {
    text-align: right;
    button {
      width: 30%;
      margin-top: 50px;
      padding: 10px 2px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  span {
    cursor: pointer;
  }
`;
