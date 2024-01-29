import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home';
import ProtectedRoute from '../pages/ProtectedRoute';

const LazyStore = lazy(() => import('../pages/store/Store'));
const LazyNews = lazy(() => import('../pages/news/News'));
const LazyAbout = lazy(() => import('../pages/about/About'));
const LazyLogin = lazy(() => import('../pages/login/Login'));
const LazyRegister = lazy(() => import('../pages/register/Register'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/store"
        element={
          <Suspense>
            <LazyStore />
          </Suspense>
        }
      />
      <Route
        path="/news"
        element={
          <Suspense>
            <LazyNews />
          </Suspense>
        }
      />
      {/* <Route path="/about" element={<About />} /> */}
      <Route
        path="/login"
        element={
          <Suspense>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <Suspense>
              <LazyAbout />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense>
            <LazyRegister />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
