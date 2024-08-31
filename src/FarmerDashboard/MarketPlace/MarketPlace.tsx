import { AddProductProvider } from "../../context/addProductContext";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const MarketPlace = styled.div`
  background: var(--color-grey-50);
`;
function MarketPlaceDashboard() {
  return (
    <AddProductProvider>
      <MarketPlace>
        <Outlet />
      </MarketPlace>
    </AddProductProvider>
  );
}

export default MarketPlaceDashboard;
