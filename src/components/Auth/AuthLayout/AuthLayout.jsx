import { Container, Image } from './AuthLayout.styled';
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';

export const AuthLayout = () => {
    return (
        <Container>
            <Image />
            <AuthForm />
        </Container>
    );
};
