import styled from "styled-components";

export const Button = styled.button`
  background: rgb(49 130 206);
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
`;

export const NavigationButton = styled(Button)`
  background: rgb(237 242 246);
  color: black;

  &:disabled {
    color: rgba(237 242 246, 0.7);
  }
`;
export const SendButton = styled(Button)`
  background: rgb(222 107 31);
  &:disabled {
    color: rgba(222 107 31, 0.7);
  }
`;
