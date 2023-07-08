import { Container, Link, Image } from './AuthLayout.styled';
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import authorizationPageImage from 'img/authorizationPageImage.svg';
import { useLocation } from 'react-router-dom';

export const AuthLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleNavigate = () => {
        pathname === '/register' ? navigate('/signin') : navigate('/register');
    }
    
      return (
        <Container>
          <Image src={authorizationPageImage} />
          <AuthForm />
          <Link onClick={handleNavigate}>{pathname === '/register' ? 'Sign In': "Registration"}</Link>
        </Container>
      );
}