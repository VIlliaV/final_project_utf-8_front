import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useAuth } from 'utils/hooks/useAuth';

const WellcomPage = lazy(() => import('pages/WellcomPage/WellcomPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() => import('pages/CategoriesPage/CategoriesPage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage/ShoppingListPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<RestrictedRoute component={<WellcomPage />} redirectTo="/" />} />
          <Route path="register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />} />
          <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo="/" />} />

          <Route path="main" element={<PrivateRoute component={<MainPage />} redirectTo="/" />} />
          <Route
            path="categories/:categoryName"
            element={<PrivateRoute component={<CategoriesPage />} redirectTo="/" />}
          />
          <Route path="add" element={<PrivateRoute component={<AddRecipePage />} redirectTo="/" />} />
          <Route path="favorite" element={<PrivateRoute component={<FavoritePage />} redirectTo="/" />} />
          <Route path="recipe/:recipeId" element={<PrivateRoute component={<RecipePage />} redirectTo="/" />} />
          <Route path="/my" element={<PrivateRoute component={<MyRecipesPage />} redirectTo="/" />} />
          <Route path="search" element={<PrivateRoute component={<SearchPage />} redirectTo="/" />} />
          <Route path="shopping-list" element={<PrivateRoute component={<ShoppingListPage />} redirectTo="/" />} />
        </Route>
      </Routes>
    )
  );
};
