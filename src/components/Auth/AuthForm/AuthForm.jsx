import { Container, Header, Form, Input, SubmitButton } from './AuthForm.styled';
import { useLocation } from 'react-router-dom';

export const AuthForm = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Header>{pathname === '/register' ? 'Registration' : 'Sign In'}</Header>
      <Form>
        {pathname === '/register' && <Input placeholder="Name" />}
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <SubmitButton>{pathname === '/register' ? 'Sign up' : 'Sign In'}</SubmitButton>
      </Form>
    </Container>
  );
};
