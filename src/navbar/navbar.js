import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>Menu</Hamburger>
      <Nav>
        <Menu isOpen={isOpen}>
          <MenuLink href=''>Home</MenuLink>
          <MenuLink href=''>Biography</MenuLink>
          <MenuLink href=''>Tributes</MenuLink>
          <MenuLink href=''>Memories</MenuLink>
          <MenuLink href=''>Gallery</MenuLink>
        </Menu>
      </Nav>
    </div>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1rem;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-transform: uppercase;


  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
`;

const MenuLink = styled.a`
  padding: 1rem 3rem;
  cursort: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in;
  text-transform: uppercase;
  color: #606060;

  &:hover {
    opacity: 0.7;
    color: #606060;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default NavBar;
