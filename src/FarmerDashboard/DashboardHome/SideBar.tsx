import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";

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

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: var(--font-size-md);
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  & > img {
    margin-right: 1rem;
    height: 24px;
    width: 24px;
  }

  &.active {
    background-color: var(--color-grey-200);

    & > img {
      filter: invert(36%) sepia(63%) saturate(3411%) hue-rotate(86deg)
        brightness(90%) contrast(97%);
    }
  }

  &:hover {
    background-color: var(--color-grey-200);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

interface SidebarProps {}

function Sidebar(props: SidebarProps) {
  return (
    <SidebarContainer>
      <Logo />
      <NavItem
        to="/farmer-dashboard/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={HomeIcon} alt="Home" />
        Home
      </NavItem>
      <NavItem
        to="/farmer-dashboard/marketplace"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={MarketplaceIcon} alt="Marketplace" />
        Marketplace
      </NavItem>
      <NavItem
        to="/farmer-dashboard/inventory"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={InventoryIcon} alt="Inventory" />
        Inventory
      </NavItem>
      <NavItem
        to="/farmer-dashboard/payment"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={PaymentIcon} alt="Payment" />
        Payment
      </NavItem>
      <NavItem
        to="/farmer-dashboard/support"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={SupportIcon} alt="Support" />
        Support
      </NavItem>
      <Spacer />
      <NavItem
        to="/profile"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={ProfileIcon} alt="Profile" />
        Profile
      </NavItem>
      <NavItem
        to="/sign-out"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <img src={SignOutIcon} alt="Sign Out" />
        Sign Out
      </NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;
