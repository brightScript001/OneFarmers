import styled from "styled-components";
import SidebarAndTopNavbar from "./Bars";
import MobileNavMenu from "./NMContainer";
import MobileHeader from "./MobileHeader";
import SBContainer from "./SBContainer";
import CardsContainer from "./CardContainer";

const DashboardContainer = styled.div`
  display: grid;
  /* min-height: 100vh; */

  @media (min-width: 769px) {
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 4rem 1fr auto;
    margin-left: 4rem;
    grid-template-areas:
      "sidebar navbar"
      "sidebar content"
      "sidebar marketplace-cards";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow-x: hidden;
    grid-template-rows: 4rem auto 1fr;
    grid-template-areas:
      "mobile-nav"
      "mobile-header"
      "search-bar"
      "marketplace-cards";
  }
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <SidebarAndTopNavbar />
      <MobileNavMenu />
      <MobileHeader />
      <SBContainer />
      <CardsContainer />
    </DashboardContainer>
  );
}

export default Dashboard;
