import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="container">
        <NavContent>
          <Logo to="/">RN</Logo>
          <NavLinks>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#projects">Projects</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </NavLinks>
        </NavContent>
      </div>
    </Nav>
  );
};

export default Navbar; 