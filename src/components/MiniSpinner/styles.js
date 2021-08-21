import styled, { css, keyframes } from "styled-components";

export const animationMiniSpinner = () => css`
  animation: ${effect} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const effect = keyframes`
0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }`;
export const ContainerMiniSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em auto;
`;

export const LdsCircle = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  & > div {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border-radius: 50%;
    background: var(--lightblue);
    ${animationMiniSpinner()}
  }
`;
