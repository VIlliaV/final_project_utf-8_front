import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <Container>
      <Footer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Header />
    </Container>
  );
};
