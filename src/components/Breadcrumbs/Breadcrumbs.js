import React from 'react';
import styled from 'styled-components/macro';


const Breadcrumbs = ({children}) => {
    return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({href, children, delegated}) => {
    return (
        <CrumbWrapper>

            <CrumbLink href={href} {...delegated}>
                <LineTop/>
                {children}
                <LineBottom/>
            </CrumbLink>

        </CrumbWrapper>
    );
};

const CrumbWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`;

var LineTop = styled.div`
  border-bottom: solid currentColor;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  width: 100%;


  transition: transform 500ms, opacity 500ms;

  ${CrumbWrapper}:hover & {
    transform: translateY(10px);
    opacity: 1;
  }
`

var LineBottom = styled(LineTop)`
  bottom: 0;
  ${CrumbWrapper}:hover & {
    transform: translateY(-10px);
    opacity: 1;
  }
`


const CrumbLink = styled.a`display: inline-block;
  color: var(--color-gray-700);
  text-decoration: none;
  transition: color 200ms;

  ${CrumbWrapper}:hover & {
    color: var(--color-secondary);
  }
`;

const Wrapper = styled.nav`
  display: flex;
  gap: 10px;
  font-size: 0.875rem;
`;
export default Breadcrumbs;
