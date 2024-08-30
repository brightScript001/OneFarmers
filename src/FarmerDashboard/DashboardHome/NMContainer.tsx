import styled from "styled-components";
import NavMenu from "./NavMenu";
import useMediaQuery from "../../utils/useMediaQuery";

const MobileNavMenuContainer = styled(NavMenu)`
  grid-area: mobile-nav;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
`;

function MobileNavMenu() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <>{isMobile && <MobileNavMenuContainer />}</>;
}

export default MobileNavMenu;
