import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/moviesAPI';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = useMemo(() =>
    searchParams.get('search') ?? '',
    [searchParams]
  );

    const getResultsBySearch = async() => {
        setQuery(searchQuery);
        
  };
  useEffect(() => {
    query && getFetchBySearch(query);
  }, [query]);

    const getFetchBySearch = async query => {
    try {
      const { results, total_results } = await getMoviesBySearch(query);
      total_results
        ? setMovies(prevMovies =>
            prevMovies ? [...results] : results
          )
          : setError('There are not matched movies');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <h1>{error}</h1>}
      <SearchForm
        getResultsBySearch={getResultsBySearch}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
              
      />
      {movies && <MoviesList movies={movies} noHeading/>}
    </>
  );
};
export default MoviesPage
