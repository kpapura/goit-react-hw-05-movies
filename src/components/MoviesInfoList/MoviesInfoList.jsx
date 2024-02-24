import NavDetails from 'components/NavDetails/NavDetails';
import { nanoid } from 'nanoid';
import React, { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Item, List, Section, StyledBtn } from './MovieInfoList.styled';
import img from "../../images/free-icon-back-130882.png"

export const MoviesInfoList = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  release_date,
  id
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = location.state; 
   
  // const handleClick = route => {
  //   navigate(route);
  // };
  return (
    <Section>
      <StyledBtn onClick={() => prevLocation && navigate(prevLocation.prev)}>
        <img src={img} alt="Go back" width={15}/>
        <p>Go back</p>
       </StyledBtn>
      <List>
        <Item key={id}>
          <h3>
            {title} ({release_date})
          </h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={250}
          />
          
          <p>User score: {vote_average}</p>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <h4>Genres:</h4>
          {genres.map(({ name }) => (
            <p key={nanoid()}>{name}</p>
          ))}
          {/* <button>
            <Link to={'cast'} state={prevLocation}>Cast</Link>
          </button>
          <button>
            <Link to={'reviews'} state={prevLocation}>Reviews</Link>
            </button> */}
        </Item>
      </List>
      <NavDetails />
      <Suspense>
        <Outlet />
      </Suspense>
    </Section>
  );
};
// onClick={() => handleClick('reviews')}
// onClick={() => handleClick('cast')}