import styled from "styled-components";

export const TextInput = styled.input`
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
