import styled from "styled-components";
import Card from "../../ui/TextCard";
import { getCardList } from "./CardList";
import { useNavigate } from "react-router-dom";

const CardsWrapper = styled.div`
  grid-area: marketplace-cards;
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  height: 200px;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    overflow-x: visible;
    margin-top: 4rem;
  }
  @media (max-width: 769px) {
    padding: 0 2rem;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
`;

function CardsContainer() {
  const cardList = getCardList();
  const navigate = useNavigate();

  const handleCardClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <CardsWrapper>
      <CardsGrid>
        {cardList.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            count={data.count}
            description={data.description}
            isCurrency={data.isCurrency}
            onClick={() => handleCardClick(data.navigateTo)}
          />
        ))}
      </CardsGrid>
    </CardsWrapper>
  );
}

export default CardsContainer;
