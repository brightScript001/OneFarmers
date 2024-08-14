import styled from "styled-components";
import Logo from "../../ui/Logo";
import HamburgerMenu from "../../ui/NavToggle";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-white-100);
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
}

export default Navbar;
