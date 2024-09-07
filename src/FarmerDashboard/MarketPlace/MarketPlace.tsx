import styled from "styled-components";
import { Outlet } from "react-router-dom";

const MarketPlace = styled.div`
  background: var(--color-grey-50);
`;
function MarketPlaceDashboard() {
  return (
    <MarketPlace>
      <Outlet />
    </MarketPlace>
  );
}

export default MarketPlaceDashboard;
