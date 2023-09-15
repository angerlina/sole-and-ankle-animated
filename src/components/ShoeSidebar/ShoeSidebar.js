import React from 'react';
import styled from 'styled-components/macro';
import {SidebarLink} from "./SidebarLink";

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarLink href="/lifestyle">Lifestyle</SidebarLink>
      <SidebarLink href="/jordan">Jordan</SidebarLink>
      <SidebarLink href="/running" isActive>Running</SidebarLink>
      <SidebarLink href="/basketball">Basketball</SidebarLink>
      <SidebarLink href="/training">Training &amp; Gym</SidebarLink>
      <SidebarLink href="/football">Football</SidebarLink>
      <SidebarLink href="/skateboarding">Skateboarding</SidebarLink>
      <SidebarLink href="/us-football">American Football</SidebarLink>
      <SidebarLink href="/baseball">Baseball</SidebarLink>
      <SidebarLink href="/golf">Golf</SidebarLink>
      <SidebarLink href="/tennis">Tennis</SidebarLink>
      <SidebarLink href="/athletics">Athletics</SidebarLink>
      <SidebarLink href="/walking">Walking</SidebarLink>
    </Wrapper>
  );
};

const Wrapper = styled.aside`   

`;



export default Sidebar;
