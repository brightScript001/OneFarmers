import { AddProductProvider } from "../../context/addProductContext";
import styled from "styled-components";
import SidebarAndTopNavbar from "../DashboardHome/Bars";
import MobileNavMenu from "../DashboardHome/NMContainer";
import MobileHeader from "../DashboardHome/MobileHeader";
import UploadProduct from "./UploadProduct";
import ProductList from "./ProductList";

const MarketPlace = styled.div`
  display: grid;
  background: var(--color-grey-50);

  @media (min-width: 769px) {
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 4rem 1fr auto;
    margin-left: 4rem;
    gap: 1rem;
    grid-template-areas:
      "sidebar navbar"
      "sidebar upload-product"
      "sidebar create-product"
      "sidebar products";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow-x: hidden;
    grid-template-rows: 4rem auto 1fr;
    grid-template-areas:
      "mobile-nav"
      "mobile-header"
      "upload-product"
      "create-product"
      "products";
  }
`;
function Dashboard() {
  return (
    <AddProductProvider>
      <MarketPlace>
        <SidebarAndTopNavbar />
        <MobileNavMenu />
        <MobileHeader />
        <UploadProduct />
        <ProductList />
      </MarketPlace>
    </AddProductProvider>
  );
}

export default Dashboard;
