import styled from "styled-components";

const Name = styled.span`
  font-size: var(--font-size-md);
  color: var(--color-grey-800);
`;

function Username({ name }) {
  return <Name>{name}</Name>;
}

export default Username;
