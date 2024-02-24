//import { MovieItem } from 'components/MovieItem/MovieItem';
import { MoviesInfoList } from 'components/MoviesInfoList/MoviesInfoList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesInfo } from 'services/moviesAPI';

const MoviesInfoPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
          const movieInfo = await getMoviesInfo(movieId);
        setMovieInfo(movieInfo.data);
      } catch (error) {
        console.log(error.message);
      }
    };
        fetchMovieInfo();
       

  }, [movieId]);
    return movieInfo && <MoviesInfoList {...movieInfo}  />;
};

export default MoviesInfoPage