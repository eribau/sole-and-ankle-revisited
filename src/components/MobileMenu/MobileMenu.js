/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <ButtonWrapper>
          <DismissButton onClick={onDismiss}>
            <Icon id='close'/>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </DismissButton>
        </ButtonWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New Releases</NavLink>
          <NavLink href="/men">Men</NavLink >
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: hsl(0deg 0% 0% / 0.5);
  `;
  
  const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  right: calc(300px - 100%);
  background-color: white;
  width: 300px;
  height: 100vh;
  height: 100dvh;
  padding: 26px 16px 32px 32px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-weight: ${WEIGHTS.medium};
  font-size: ${18 / 16}rem;
  color: ${COLORS.gray[900]};
  text-decoration: none;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-self: flex-end;
`;

const DismissButton = styled(UnstyledButton)`
  height: 24px;
  width: 24px;
`;

export default MobileMenu;
