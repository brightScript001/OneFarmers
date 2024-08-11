import styled from "styled-components";
import Heading from "./Heading";

const CardWrapper = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  /* &:hover {
    transform: translateY(-0.5rem);
  } */
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  /* transition: transform 0.3s; */

  /* ${CardWrapper}:hover & {
    transform: scale(1.1);
  } */
`;

const CardContent = styled.div`
  padding: 1.6rem;
`;

const Card = ({ image, title, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Heading as="h2">{title}</Heading>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
