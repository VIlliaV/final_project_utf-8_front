import { useNavigate } from 'react-router-dom';
import { Container, RegisterButton, LoginButton } from './AuthNav.styled';

export const AuthNav = () => {
    const navigate = useNavigate();

  return (
    <Container>
      <RegisterButton
        onClick={() => {
          navigate('/register');
        }}
      >
        Registration
      </RegisterButton>
      <LoginButton
        onClick={() => {
          navigate('/signin');
        }}
      >
        Sign in
      </LoginButton>
    </Container>
  );
};
