import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesAPI';
import { Item, List } from './Cast.styled';
import no_image from "../../images/no-image.svg"

const Cast = () => {
    const [movieCast, setMovieCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const getFetchCast = async () => {
            try {
                const cast = await getMovieCast(movieId);
                setMovieCast(cast);

            } catch (error) {
                console.log(error.message);
        }
        }
        getFetchCast();
    }, [movieId])

    return (
      movieCast && (
          <List>
              {movieCast.map(({ name, id,profile_path,character}) => (
                  <Item key={id} >
                      <img src={!profile_path ? no_image :`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width={100} />
                      <p>{name}</p>
                      <p>Character: {character}</p>
                  </Item>
            ))}
          </List>
    )
  )
}

export default Cast