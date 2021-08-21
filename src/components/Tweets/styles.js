import styled from "styled-components";

export const TweetsWrapper = styled.section`
  margin-top: 10px;
  border-top: 1px solid var(--gray);
  background-color: var(--white);
`;

export const OneTweet = styled.article`
  display: grid;
  grid-template-columns: 50px auto;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 20px;
`;

export const User = styled.div`
  cursor: pointer;
  & > img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
`;

export const Right = styled.div`
  margin-left: 14px;
  margin-right: 10px;
  font-size: 0.8em;
  & > p {
    line-height: 1.5;
  }
  & > picture {
    width: 100%;
    img {
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 20px;
      width: 100%;
    }
  }
`;
export const Title = styled.div`
  /* display: flex; */
  align-items: center;
  font-size: 1.1em;
  margin-bottom: 10px;
  padding-top: 5px;
  a {
    color: black;
  }
  & > h5 {
    cursor: pointer;
    font-size: 0.9em;
  }
  & > span {
    color: var(--secondary);
    margin-left: 10px;
    font-size: 0.8em;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
export const Action = styled.div`
  color: var(--secondary);
  display: flex;
  align-items: center;
  cursor: pointer;
  & > span {
    margin-left: 8px;
  }
`;
