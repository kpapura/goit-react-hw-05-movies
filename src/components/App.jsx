import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
//import { HomePage } from "pages/HomePage";
//import { MoviesPage } from "pages/MoviesPage";
//import { MoviesInfoPage } from "pages/MoviesInfoPage";
//import { Cast } from "./Cast/Cast";
//import { Reviews } from "./Reviews/Reviews";
import { lazy } from 'react';

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviesInfoPage = lazy(() => import('../pages/MoviesInfoPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MoviesInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
