import React from 'react';

import { HeaderTeg, NavTeg, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderTeg>
      <NavTeg>
        <StyledNavLink to={'/'}>Home</StyledNavLink>
      </NavTeg>
      <NavTeg>
        <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
      </NavTeg>
    </HeaderTeg>
  );
};
