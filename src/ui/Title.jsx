import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
  white-space: nowrap;
  text-align: center;
  color: var(--color-grey-800);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: var(--color-grey-700);
  margin: 1rem 0;
`;

export { Title, Subtitle };
