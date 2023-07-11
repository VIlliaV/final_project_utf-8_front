import { Container, Image } from './AuthLayout.styled';
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';

export const AuthLayout = () => {
    console.log(window.innerHeight)
    return (
        <Container>
            <Image />
            <AuthForm />
        </Container>
    );
};
