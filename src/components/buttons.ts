import styled from "styled-components";

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
