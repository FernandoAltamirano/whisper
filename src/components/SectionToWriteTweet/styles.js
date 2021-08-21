import styled from "styled-components";

export const SectionToWrite = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  padding: 20px;
  form {
    overflow-y: auto;
    /* max-height: 70vh; */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const User = styled.div`
  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;
export const Textarea = styled.textarea`
  margin: 0px 0px 0 10px;
  padding: 5px 5px 10px 10px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  resize: none;
  border: ${(props) =>
    props.border ? "2px dashed var(--lightblue)" : "2px solid transparent"};
  outline: none;
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    width: 6px;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--lightblue);
    border-radius: 50px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.div`
  margin: 0 5px;
  & > label {
    cursor: pointer;
  }
`;
export const Button = styled.button`
  padding: 8px 10px;
  width: 90px;
  /* display: block; */
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  outline: none;
  align-items: center;
`;

export const ImageUploaded = styled.div`
  margin-left: 1em;
  text-align: center;
  & > img {
    border-radius: 10px;
    width: 90%;
  }
  & > div {
    text-align: right;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    width: 6px;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--lightblue);
    border-radius: 50px;
  }
`;
