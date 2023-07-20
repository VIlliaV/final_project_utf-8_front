import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';

import { Container, EmptyContent } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Container>
      {isLoggedIn && <Header />}
      <main>
        <ScrollToTop />
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
