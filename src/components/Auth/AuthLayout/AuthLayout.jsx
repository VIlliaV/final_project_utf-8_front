import { Container, Image } from './AuthLayout.styled';
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';
import authorizationPageImage from 'img/authorizationPageImage.svg';

export const AuthLayout = () => {

  return (
    <Container>
      <Image src={authorizationPageImage} />
      <AuthForm />
    </Container>
  );
};
