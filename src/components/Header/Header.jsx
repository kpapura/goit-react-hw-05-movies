import React from 'react';
import { HeaderTeg, NavTeg, StyledNavLink } from './Header.styled';

export const Header = () => {

  return (
    <HeaderTeg>
      <NavTeg>
        <StyledNavLink to={'/'} state={{prev: '/' }}>Home</StyledNavLink>
      </NavTeg>
      <NavTeg>
        <StyledNavLink to={'/movies'} state={{prev: '/movies' }}>Movies</StyledNavLink>
      </NavTeg>
    </HeaderTeg>
  );
};
