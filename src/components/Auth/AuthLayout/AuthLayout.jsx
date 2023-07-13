import { Container, Image } from './AuthLayout.styled';
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';
import { useLocation } from 'react-router-dom';

export const AuthLayout = () => {
    const { pathname } = useLocation();


    return (
      <Container path={pathname}>
        <Image />
        <AuthForm />
      </Container>
    );
};
