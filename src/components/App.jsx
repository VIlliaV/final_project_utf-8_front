import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';
import { useAuth } from 'utils/hooks/useAuth';
import { Toaster } from 'react-hot-toast';
import { toggleTheme } from 'utils/toggleThemeColor';
// import { toggleTheme } from 'styles/themeColor';

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
const Page404 = lazy(() => import('pages/404Page/404Page'));

export const App = () => {
  const { isRefreshing, isThemeToggle } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    toggleTheme(isThemeToggle);
  }, [isThemeToggle]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 2000,
          style: {
            background: isThemeToggle ? 'rgb(30, 31, 40)' : 'rgb(250, 250, 250)',
            color: isThemeToggle ? 'rgb(250, 250, 250)' : 'gb(30, 31, 40)',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<RestrictedRoute component={<WellcomPage />} redirectTo="/main" />} />
          <Route path="register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/main" />} />
          <Route path="signin" element={<RestrictedRoute component={<SigninPage />} redirectTo="/main" />} />

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
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};
