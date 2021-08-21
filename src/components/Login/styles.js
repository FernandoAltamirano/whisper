import styled from "styled-components";

export const LoginWrapper = styled.div`
  margin: 1em auto;
  display: flex;
  max-width: 600px;
  padding: 0 2em;
  flex-direction: column;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 1em auto;
  & > a {
    color: var(--lightblue);
    font-weight: 400;
    text-decoration: none;
    font-size: 14px;
  }
`;
