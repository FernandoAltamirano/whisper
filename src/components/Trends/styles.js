import styled from "styled-components";

export const TrendsContainer = styled.div`
  display: none;
  padding: 0.5em 1.6em;
  @media (min-width: 1024px) {
    display: initial;
  }
  span {
    color: var(--lightblue);
    font-size: 14px;
    margin-left: 10px;
  }
`;
export const InputContainer = styled.div`
  background-color: var(--gray2);
  border-radius: 30px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  input {
    margin-left: 10px;
    border: none;
    outline: none;
    background-color: var(--gray2);

    ::placeholder {
      color: #88949c;
    }
  }
`;
export const MaybeLikes = styled.div`
  background-color: var(--gray2);
  margin: 1em 0;
  padding: 10px 15px;
  border-radius: 15px;
`;
export const Item = styled.div`
  display: grid;
  margin: 1.5em 0;
  grid-template-columns: 50px 60% auto;
  img {
    width: 40px;
    border-radius: 100%;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const ContentItem = styled.div`
  margin-left: 10px;
`;
export const DisplayName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
export const User = styled.div`
  font-size: 12px;
  color: #88949c;
`;
export const ContainerButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  button {
    margin: 0;
    width: 100%;
    padding: 5px;
    font-size: 14px;
    background-color: transparent;
    color: var(--lightblue);
    border: 1px solid var(--lightblue);
  }
`;

export const TrendsForYou = styled.div`
  background-color: var(--gray2);
  margin: 1em 0;
  padding: 10px 15px;
  border-radius: 15px;
`;

export const ItemForYou = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  p {
    color: #88949c;
    font-size: 14px;
  }
`;
