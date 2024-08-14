import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white-100);
  color: var(--color-grey-700);
  outline: none;

  &:focus {
    border-color: var(--color-green-600);
    box-shadow: 0 0 0 3px var(--color-green-200);
  }
`;

export default Input;
