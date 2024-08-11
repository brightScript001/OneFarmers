import styled from "styled-components";
import { formatNumber } from "../utils/formatNumber";

const CardContainer = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-white-100);
  text-align: start;
  padding: 1rem;
  flex: 1;
  min-width: 20rem;
  min-height: 10rem;
  margin-right: 1rem;

  &:last-child {
    flex: 2;
    background-color: var(--color-green-600);
    color: var(--color-grey-100);
  }
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: 0.5rem;
`;

const Count = styled.p`
  font-size: var(--font-size-lg);
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: var(--font-size-sm);
  margin-top: 0.5rem;
`;

function Card({ title, count, description, isCurrency }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Count>{formatNumber(count, isCurrency)}</Count>
      <Description>{description}</Description>
    </CardContainer>
  );
}

export default Card;
