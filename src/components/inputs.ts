import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    border-bottom-width: 2px;
  }
`;
