import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  font-family: "Nunito";
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const slideAnimation = keyframes`

  0% {
     opacity:0;
  } 100% {
   opacity:1;
  }`;
export const ScreenContainer = styled.div`
  min-width: 300px;
  animation: ${slideAnimation} 300ms;
`;
