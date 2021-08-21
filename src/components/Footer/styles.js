import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 87%;
  margin: 0.7em auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* max-width: 500px; */
  grid-area: a3;
  @media (min-width: 768px) {
    margin: 1em auto;
  }
`;
export const Text = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin: 3px 5px;
`;
