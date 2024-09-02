import styled from "styled-components";
import UploadProduct from "./UploadProduct";
import ProductList from "./ProductList";
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
