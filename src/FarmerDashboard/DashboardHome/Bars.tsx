import styled from "styled-components";
import Sidebar from "./SideBar";
import TopNavbar from "./Navbar";
import useMediaQuery from "../../utils/useMediaQuery";

const SidebarContainer = styled(Sidebar)`
  grid-area: sidebar;
`;

const TopNavbarContainer = styled(TopNavbar)`
  grid-area: navbar;
  z-index: 1000;
`;

function SidebarAndTopNavbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isMobile && (
        <>
          <SidebarContainer />
          <TopNavbarContainer />
        </>
      )}
    </>
  );
}

export default SidebarAndTopNavbar;
