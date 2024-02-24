import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getFavMovies } from 'services/moviesAPI';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getFetchFavMovies();
  }, []);

  const getFetchFavMovies = async () => {
    try {
      const { results } = await getFavMovies();
      setMovies(prevMovies =>
        prevMovies ? [ ...results] : results
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {movies && (
      <>
        <MoviesList movies={movies}/>
      </>
      )}
    </>
  );
};

export default HomePage