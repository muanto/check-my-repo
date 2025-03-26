import styled, { keyframes } from "styled-components";

// Animations
const slideAnimation = keyframes`
  0% {
     opacity:0;
  } 
  100% {
   opacity:1;
  }
`;

// Containers
export const AppContainer = styled.div`
  font-family: "Nunito";
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScreenContainer = styled.div`
  min-width: 300px;
  animation: ${slideAnimation} 300ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Buttons
export const Button = styled.button`
  font-family: "Nunito";
  background: rgb(49, 130, 206);
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    background: rgba(49, 130, 206, 0.5);
  }
`;

export const SendButton = styled(Button)`
  background: rgb(222, 107, 31);
  &:disabled {
    background: rgba(222, 107, 31, 0.5);
  }
`;

export const Input = styled.input`
  font-family: "Nunito";
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  font-size: 16px;
  &:focus {
    border-bottom-width: 2px;
  }
`;

// Typo
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;
export const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 100;
  color: rgb(0, 0, 0);
`;
export const DataValue = styled.div`
  font-size: 30px;
  padding: 0;
  margin: 0;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  height: 14px;
  color: red;
`;
