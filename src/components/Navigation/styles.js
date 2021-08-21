import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 500px;
  position: fixed;
  padding: 1em 0;
  justify-content: space-between;
  background-color: var(--white);
  width: 75px;
  @media (min-width: 1292px) {
    width: 250px;
  }
`;

export const NavigationWrapper = styled.section`
  width: 100%;
  text-align: center;
`;

export const Item = styled.div`
  text-align: center;
  cursor: pointer;
  width: 100%;
  a {
    padding: 15px;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    padding-left: 1em;
    transition: 100ms all;
    border-radius: 30px;
    :hover {
      background-color: var(--lightblue2);
    }
    :hover > p {
      color: var(--lightblue);
    }
    /* @media (min-width: 1292px) { */
    display: flex;
    align-items: center;
    /* } */
  }
`;

export const Title = styled.p`
  display: none;

  @media (min-width: 1292px) {
    display: initial;
    font-size: 20px;
    font-weight: bold;
    margin-left: 1em;
  }
`;

export const ItemWrite = styled.button`
  border: 1px solid var(--lightblue);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: var(--lightblue);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  & > svg {
    margin-top: 10px;
  }
  @media (min-width: 1292px) {
    width: 90%;
    margin: 1em auto;
    border-radius: 30px;
  }
`;

export const User = styled.div`
  text-align: center;
  margin-bottom: 2em;
  border-radius: 50%;
  cursor: pointer;
  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  &:hover ~ p {
    display: block;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 1em 0;
  p {
    font-size: 16px;
    text-align: left;
  }
  figure {
    margin: auto;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 80px 150px auto;
  }
`;

export const Modal = styled.p`
  position: absolute;
  top: 0;
  background-color: var(--white);
  padding: 1px 5px 0px 5px;
  color: var(--lightblue);
  text-decoration: underline;
  margin-top: -20px;
  transition: 450ms all;
  cursor: pointer;
  display: none;
  font-size: 12px;
  &:hover {
    display: block;
  }
`;

export const Opt = styled.div`
  svg {
    display: none;
    @media (min-width: 1292px) {
      display: initial;
    }
  }
`;
