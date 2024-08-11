import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
`;

const MenuContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 4rem;
  right: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
`;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <MenuContent isOpen={isOpen}>
        <ul>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </ul>
      </MenuContent>
    </>
  );
}

export default HamburgerMenu;
