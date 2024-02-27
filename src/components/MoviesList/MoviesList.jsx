import React from 'react';
import { useLocation } from 'react-router-dom';

import { Heading, Item, Section, StyledNavLink } from './MoviesList.styled';

export const MoviesList = ({ movies, noHeading }) => {
  
  const location = useLocation();
  const pathname = location.pathname;
  let num = 0;

  return (
    <Section>
      {!noHeading && <Heading>Trending Today</Heading>}
      <ul style={{ paddingLeft: '0' }}>
        {movies?.map(({ id, title }) => (
          <Item key={id}>
            <StyledNavLink
              to={pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
            >
              {(num += 1)}. {title}
            </StyledNavLink>
          </Item>
        ))}
      </ul>
    </Section>
  );
};
