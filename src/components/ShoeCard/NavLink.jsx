import styled from "styled-components/macro";
import {WEIGHTS} from "../../constants";

export const NavLink = ({children, href}) => <Wrapper>
    <Link href={href} after={children.toString()}>{children}</Link>
</Wrapper>


const Wrapper = styled.div`
  position: relative;
  color: var(--color-gray-900);
  &:first-of-type {
    color: var(--color-secondary);
  }
  :hover * {
    transform: translateY(-100%);
  }
`
const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: inherit;
  transition: transform 150ms;
  display: block;
  :after {
    display: block;
    content: '${props => props.after}';
    position: absolute;
    font-weight: ${WEIGHTS.bold};
  }
`;
