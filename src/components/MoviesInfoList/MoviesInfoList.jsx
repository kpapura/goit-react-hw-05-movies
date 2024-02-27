import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { nanoid } from 'nanoid';

import NavDetails from 'components/NavDetails/NavDetails';

import { Item, List, Section, StyledBtn } from './MovieInfoList.styled';

import img from '../../images/free-icon-back-130882.png';

export const MoviesInfoList = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  release_date,
  id,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/movies');

  return (
    <Section>
      <StyledBtn onClick={() => navigate(goBackRef.current)}>
        <img src={img} alt="Go back" width={15} />
        <p>Go back</p>
      </StyledBtn>
      <List>
        <Item key={id}>
          <h3>
            {title} ({release_date.slice(0, 4)})
          </h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={250}
          />

          <p>User score: {vote_average.toFixed(1)}</p>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <h4>Genres:</h4>
          {genres.map(({ name }) => (
            <p key={nanoid()}>{name}</p>
          ))}
        </Item>
      </List>
      <NavDetails />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
