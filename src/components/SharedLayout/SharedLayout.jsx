import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';

import { Container, EmptyContent } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      {isLoggedIn && <Header />}
      <main>
        <Suspense
          fallback={
            <EmptyContent>
              <Loader />
            </EmptyContent>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      {isLoggedIn && <Footer />}
    </Container>
  );
};
