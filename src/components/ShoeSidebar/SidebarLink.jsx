import styled from "styled-components/macro";
import {WEIGHTS} from "../../constants";

export const SidebarLink = ({isActive, children, href}) => <LinkWrapper>
    <Link href={href} isActive={isActive} before={children.toString()}>{children}&nbsp;</Link>
</LinkWrapper>

const LinkWrapper = styled.div`
  :hover * {
    transform: rotateY(90deg);
    background-color: var(--color-gray-100);
  }
`

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${props => props.isActive ? 'var(--color-primary)' : 'var(--color-gray-900)'};
  line-height: 2;
  transform-style: preserve-3d;
  transition: transform 1s, background-color 0.5s;
  transition-delay: 100ms;
  transform-origin: 0 50%;
  :before {
    perspective: 800px;
    content: '${props => props.before}';
    transform: rotateY(-90deg) translateX(100%);
    position: absolute;
    transform-origin: 100%;
    line-height: 2;
    display: inline-block;
    background-color: white;
    min-width: max-content;
  }
`;
