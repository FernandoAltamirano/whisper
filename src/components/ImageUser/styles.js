import styled from "styled-components";

export const Figure = styled.figure`
  text-align: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  margin-bottom: 10px;
  & > svg {
    border: 1px solid var(--gray);
    border-radius: 50%;
  }
  & > img {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    object-fit: cover;
    border-radius: 50%;
  }
`;
