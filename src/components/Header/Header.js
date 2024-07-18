import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">À VENDRE</NavLink>
          <NavLink href="/new">NOUVELLES VERSIONS</NavLink>
          <NavLink href="/men">HOMMES</NavLink>
          <NavLink href="/women">FEMMES</NavLink>
          <NavLink href="/kids">LES ENFANTS</NavLink>
          <NavLink href="/collections">COLLECTIONS</NavLink>
        </Nav>
        <MobileIconWrapper>
          <MobileMenuButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu'/>
          </MobileMenuButton>
          <Icon id='search'/>
          <Icon id='shopping-bag'/>
        </MobileIconWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.75rem, 8.3vw - 5rem, 5rem);
  margin: 0px 48px;

  @media ${QUERIES.laptopAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileIconWrapper = styled.div`
  flex: 1;

  & > * {
    display: none;
  }

  @media ${QUERIES.laptopAndDown} {
    & > * {
      display: revert;
    }

    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    gap: clamp(1.375rem, 1.7vw + 0.732rem, 2.125rem);
  }
`;

const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default Header;
