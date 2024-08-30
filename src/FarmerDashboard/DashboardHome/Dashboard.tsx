import styled from "styled-components";
import SidebarAndTopNavbar from "./Bars";
import MobileNavMenu from "./NMContainer";
import MobileHeader from "./MobileHeader";
import SBContainer from "./SBContainer";
import { Outlet } from "react-router-dom";

const DashboardContainer = styled.div`
  display: grid;
  background: var(--color-grey-50);
  min-height: 100vh;

  @media (min-width: 769px) {
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 4rem auto;
    grid-template-areas:
      "sidebar navbar"
      "sidebar content";
    margin-left: 4rem;
    /* gap: 1rem; */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow-x: hidden;
    grid-template-rows: 4rem auto 1fr;
    grid-template-areas:
      "mobile-nav"
      "mobile-header"
      "search-bar"
      "content";
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  /* padding: 1rem; */
  margin-top: 4rem;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <SidebarAndTopNavbar />
      <MobileNavMenu />
      <MobileHeader />
      <SBContainer />

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
