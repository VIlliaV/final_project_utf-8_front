import { Container, Header, Form, Input, SubmitButton, FormContainer, Link } from './AuthForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


export const AuthForm = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleNavigate = useCallback(() => {
      pathname === '/register' ? navigate('/signin') : navigate('/register');
    }, [navigate, pathname]);

    

    return (
      <FormContainer>
        <Container>
          <Header>{pathname === '/register' ? 'Registration' : 'Sign In'}</Header>
          <Form>
            {pathname === '/register' && <Input placeholder="Name" />}
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <SubmitButton>{pathname === '/register' ? 'Sign up' : 'Sign In'}</SubmitButton>
          </Form>
        </Container>
        <Link onClick={handleNavigate}>{pathname === '/register' ? 'Sign In' : 'Registration'}</Link>
      </FormContainer>
    );
};
