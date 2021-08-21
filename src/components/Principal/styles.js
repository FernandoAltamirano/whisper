import styled from "styled-components";

export const PrincipalWrapper = styled.div`
  margin: 1em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "a2 a1" "a3 a3";
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin-top: 3em;
    margin-bottom: 3em;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 10px;
  grid-area: a1;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const ButtonOutline = styled.button`
  background-color: white;
  border: 1px solid var(--lightblue);
  color: var(--lightblue);
  display: block;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: none;
  /* flex: 0.5; */
  height: 300px;
  margin: 20px 0;
  grid-area: a2;
  @media (min-width: 768px) {
    display: initial;
    margin: 0;
    height: 88vh;
    img {
      width: 100%;
      object-fit: cover;
      height: 100vh;
      mask-image: linear-gradient(
        to right,
        rgba(21, 25, 28, 1),
        rgba(21, 25, 28, 0)
      );
    }
  }
`;

export const H1 = styled.h1`
  font-family: "Princess Sofia", cursive;
  margin-top: 2em;
  @media (min-width: 768px) {
    font-size: 70px;
  }
`;
