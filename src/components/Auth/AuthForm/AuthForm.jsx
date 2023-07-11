import { Container, Header, Form, Input, SubmitButton, Link, FormContainer } from './AuthForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { loginUser, signupUser, logoutUser } from 'redux/auth/authOperations';
// import { useAuth } from 'utils/hooks/useAuth';

export const AuthForm = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = useCallback(() => {
        pathname === '/register' ? navigate('/signin') : navigate('/register');
    }, [navigate, pathname]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (pathname === '/signin') {
            dispatch(
                loginUser({
                    email: form.elements.email.value,
                    password: form.elements.password.value,
                })
            );
            return;
        }
        dispatch(
            signupUser({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
    };
  
  const handleLogout = (e) => {
     e.preventDefault();
    dispatch(logoutUser());
  }

    return (
        <FormContainer>
            <Container>
                <Header>{pathname === '/register' ? 'Registration' : 'Sign In'}</Header>
                <Form onSubmit={handleSubmit}>
                    {pathname === '/register' && <Input name="name" placeholder="Name" />}
                    <Input name="email" placeholder="Email" />
                    <Input name="password" placeholder="Password" />
                    <SubmitButton type="submit">{pathname === '/register' ? 'Sign up' : 'Sign In'}</SubmitButton>
                </Form>
                <button style={{ marginTop: 30 }} type="button" onClick={handleLogout}>
                    Logout
                </button>
            </Container>
            <Link onClick={handleNavigate}>{pathname === '/register' ? 'Sign In' : 'Registration'}</Link>
        </FormContainer>
    );
};
