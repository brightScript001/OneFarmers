import styled from "styled-components";
import UploadProduct from "./Upload";
import ProductList from "./List";
import CardsContainer from "../../DashboardHome/CardContainer";

const MarketPlace = styled.div`
  background: var(--color-grey-50);
`;
function MarketPlaceDashboard() {
  return (
    <>
      {" "}
      <MarketPlace>
        <CardsContainer />
        <UploadProduct />
        <ProductList />
      </MarketPlace>
    </>
  );
}

export default MarketPlaceDashboard;
