import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    width: 6px;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
  }
  @media (min-width: 768px) {
  }
`;
export const WriteWrapper = styled.section`
  overflow-y: auto;
  padding-top: 10px;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  & svg {
    margin-left: 20px;
    cursor: pointer;
  }

  & > a {
    text-decoration: none;
    color: var(--lightblue);
    margin-left: 30px;
  }
  @media (min-width: 768px) {
    max-height: 95vh;
    height: auto;
    width: 600px;
    margin: 1em auto;
    border-radius: 30px;
    padding: 20px;
    textarea {
      height: 140px;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
