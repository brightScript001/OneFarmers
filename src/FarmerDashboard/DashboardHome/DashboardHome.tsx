import styled from "styled-components";
import CardsContainer from "./CardContainer";

const DashboardContainer = styled.div`
  display: grid;
  background: var(--color-grey-50);
`;

function DashboardHome() {
  return (
    <DashboardContainer>
      <CardsContainer />
    </DashboardContainer>
  );
}

export default DashboardHome;
