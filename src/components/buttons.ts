import styled from "styled-components";

export const Button = styled.button`
  font-family: "Nunito";
  background: rgb(49, 130, 206);
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  &:disabled {
    background: rgba(49, 130, 206, 0.5);
  }
`;

export const NavigationButton = styled(Button)`
  background: rgb(237, 242, 246);
  color: rgb(0, 0, 0);

  &:disabled {
    background: rgba(237, 242, 246, 0.5);
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const SendButton = styled(Button)`
  background: rgb(222, 107, 31);
  &:disabled {
    background: rgba(222, 107, 31, 0.5);
  }
`;
