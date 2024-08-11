import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  HomeIcon,
  MarketplaceIcon,
  InventoryIcon,
  PaymentIcon,
  SupportIcon,
  ProfileIcon,
  SignOutIcon,
} from "../../ui/Icons";
import Logo from "../../ui/Logo";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 13rem;
  background-color: var(--color-white-100);
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: var(--font-size-sm);
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  & > img {
    margin-right: 1rem;
    height: 24px;
    width: 24px;
  }

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo />
      <NavItem to="/farmer-dashboard">
        <img src={HomeIcon} alt="Home" />
        Home
      </NavItem>
      <NavItem to="/marketplace">
        <img src={MarketplaceIcon} alt="Marketplace" />
        Marketplace
      </NavItem>
      <NavItem to="/inventory">
        <img src={InventoryIcon} alt="Inventory" />
        Inventory
      </NavItem>
      <NavItem to="/payment">
        <img src={PaymentIcon} alt="Payment" />
        Payment
      </NavItem>
      <NavItem to="/support">
        <img src={SupportIcon} alt="Support" />
        Support
      </NavItem>
      <Spacer />
      <NavItem to="/profile">
        <img src={ProfileIcon} alt="Profile" />
        Profile
      </NavItem>
      <NavItem to="/sign-out">
        <img src={SignOutIcon} alt="Sign Out" />
        Sign Out
      </NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;
