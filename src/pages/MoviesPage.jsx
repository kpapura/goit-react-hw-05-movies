import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';

import { getMoviesBySearch } from 'services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = useMemo(
    () => searchParams.get('query') || '',
    [searchParams]
  );

  useEffect(() => {
    searchQuery && getFetchBySearch(searchQuery);
  }, [searchQuery]);

  const getFetchBySearch = async param => {
    setError('');
    try {
      const { results, total_results } = await getMoviesBySearch(param);
      total_results
        ? setMovies(prevMovies => (prevMovies ? [...results] : results))
        : setError('There are not matched movies');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {error && <h1>{error}</h1>}
      {movies && <MoviesList movies={movies} noHeading />}
    </>
  );
};
export default MoviesPage;
