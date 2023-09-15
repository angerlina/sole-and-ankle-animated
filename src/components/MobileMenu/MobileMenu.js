/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {keyframes} from "styled-components";

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss} style={{
            opacity: isOpen ? 1 : 0, transition: 'opacity', transitionDuration: isOpen
                ? '1000ms'
                : '500ms',
        }}>
            <Content aria-label="Menu">
                <CloseButton onClick={onDismiss}>
                    <Icon id="close"/>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Filler/>
                <Nav>
                    <NavLink href="/sale" order={0}>Sale</NavLink>
                    <NavLink href="/new" order={1}>New&nbsp;Releases</NavLink>
                    <NavLink href="/men" order={2}> Men</NavLink>
                    <NavLink href="/women" order={3}>Women</NavLink>
                    <NavLink href="/kids" order={4}>Kids</NavLink>
                    <NavLink href="/collections" order={5}>Collections</NavLink>
                </Nav>
                <Footer>
                    <SubLink order={0} href="/terms">Terms and Conditions</SubLink>
                    <SubLink order={1} href="/privacy">Privacy Policy</SubLink>
                    <SubLink order={2} href="/contact">Contact Us</SubLink>
                </Footer>
            </Content>
        </Overlay>
    );
};

const fadeInOverlay = keyframes`
  from {
    background: transparent;
  }
  to {
    background: var(--color-backdrop);
  }
`

const slideIn = keyframes`
  from {
    transform: rotateY(90deg);
    background: var(--color-gray-700);
    margin-top: auto;
    margin-bottom: auto;
  }
  to {
  }
`

const fadeInContent = keyframes`
  from {
    color: transparent;
  }
`
const slideInFooterLinks = keyframes`
  from {
    transform: translateX(200%);
  }
`

const Overlay = styled(DialogOverlay)`
  animation: ${fadeInOverlay} 1000ms;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  perspective: 800px;
  transform-style: preserve-3d;
  animation: ${slideIn} 600ms backwards;
  animation-delay: 200ms;
  transform-origin: 100% 0;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  animation: ${fadeInContent} 600ms backwards;
  animation-delay: 500ms;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:first-of-type {
    color: var(--color-secondary);
  }
  animation: ${fadeInContent} ${props => props.order * 300}ms backwards;
  animation-delay: 500ms;
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  animation: ${slideInFooterLinks} ${props => props.order * 400}ms backwards;
  animation-delay: 300ms;
`;

export default MobileMenu;
