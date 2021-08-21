import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  /* height: 100vh; */
  min-width: 500px;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 650px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 90%;
    grid-template-columns: 75px 50% auto;
  }
  @media (min-width: 1292px) {
    width: 80%;
    grid-template-columns: 300px 45% auto;
  }
`;
