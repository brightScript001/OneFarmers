import { AddProductProvider } from "../../context/addProductContext";
import styled from "styled-components";
import UploadProduct from "./UploadProduct";
import ProductList from "./ProductList";

const MarketPlace = styled.div`
  background: var(--color-grey-50);
`;
function MarketPlaceDashboard() {
  return (
    <AddProductProvider>
      <MarketPlace>
        <UploadProduct />
        <ProductList />
      </MarketPlace>
    </AddProductProvider>
  );
}

export default MarketPlaceDashboard;
