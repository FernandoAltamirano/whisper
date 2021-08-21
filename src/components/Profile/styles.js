import styled from "styled-components";

export const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: 75px auto;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  background-color: var(--white);
  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    width: 6px;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 5px 10px;
  border-bottom: 1px solid var(--gray);
  & > div {
    margin-left: 20px;
  }
  & p {
    font-size: 12px;
  }
`;
export const UserDetails = styled.div`
  /* display: flex; */
  width: 100%;
  align-items: flex-start;
  padding: 30px 10px 10px 10px;
  background-color: var(--white);
  text-align: left;
  font-size: 0.8em;
  & > button {
    width: 25%;
    color: var(--lightblue);
    background-color: var(--white);
    border: 1px solid var(--lightblue);
  }
  span {
    color: var(--secondary);
  }
  h3 {
    margin: 0;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary);
  margin: 10px 0;
  span {
    margin-left: 10px;
    margin-right: 5px;
  }
`;

export const TweetsContent = styled.div`
  & > p {
    font-weight: 700;
    margin-top: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
    color: var(--lightblue);
    border-bottom: 1px solid var(--gray);
  }
  & h3 {
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid var(--gray);
  }
`;

export const TweetsWrapper = styled.section`
  margin-top: 10px;
`;
