import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { loginUser, signupUser } from 'redux/auth/authOperations';
import inputIconSuccess from 'img/inputIconSuccess.svg';
import inputIconError from 'img/inputIconError.svg';
import { useAuth } from 'utils/hooks/useAuth';
import { clearErrorMessage } from 'redux/auth/authSlice';
import {
  Container,
  Header,
  Form,
  SubmitButton,
  Link,
  FormContainer,
  InputErrorContainer,
  NameInput,
  EmailInput,
  PasswordInput,
  NameIcon,
  EmailIcon,
  PasswordIcon,
  SuccessStatusIcon,
  NameInputContainer,
  EmailInputContainer,
  PasswordInputContainer,
  ErrorMessage,
  InputWarningContainer,
} from './AuthForm.styled';


const registerInitialValues = {
  name: '',
  email: '',
  password: '',
};

const signInInitialValues = {
  email: '',
  password: '',
};

export const AuthForm = () => {
  const [initialValues, setInitialValues] = useState(registerInitialValues);
  const [isRegisterPage, setIsRegisterPage] = useState(true);
  const { pathname } = useLocation();
  const { errorMessage } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/signin') {
      setIsRegisterPage(false);
      setInitialValues(signInInitialValues);
    }

    if (pathname === '/signin' && errorMessage === 'Email in use') {
      dispatch(clearErrorMessage());
    }
    if (pathname === '/register' && errorMessage === 'Email or password is wrong') {
      dispatch(clearErrorMessage());
    }
  }, [pathname, dispatch, errorMessage]);


  const handleNavigate = useCallback(() => {
    isRegisterPage ? navigate('/signin') : navigate('/register');
  }, [navigate, isRegisterPage]);

  const onSubmit = useCallback(
    data => {
      const name = data.name.trim();
      const password = data.password.trim();
      const email = data.email.trim();

      if (!isRegisterPage) {
        dispatch(loginUser({ email, password }));
        return;
      }
      dispatch(signupUser({ name, email, password }));
    },
    [dispatch, isRegisterPage]
  ); 

  const validate = values => {
    const errors = {};
    const name = values.name.trim();
    const password = values.password.trim();
    const email = values.email.trim();
    
    if (isRegisterPage) {
      if (!name) errors.name = 'Required';
    } 

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email format. Example username@domain.tld';
    }

    if (!password) {
      errors.password = 'Required';
    } else if (password.length < 6) {
      errors.password = 'The password should be at least 6 symbols excluding spaces';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <FormContainer $isregisterpage={isRegisterPage.toString()}>
      <Container>
        <Header>{isRegisterPage ? 'Registration' : 'Sign In'}</Header>
        <Form onSubmit={formik.handleSubmit}>
          {isRegisterPage && (
            <NameInputContainer>
              <NameIcon
                $haserror={formik.touched.name && formik.errors.name}
                $correct={formik.touched.name && !formik.errors.name && formik.values.name !== ''}
              />
              <NameInput
                $haserror={formik.touched.name && formik.errors.name}
                $correct={formik.touched.name && !formik.errors.name && formik.values.name !== ''}
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <>
                  <SuccessStatusIcon src={inputIconError} />
                  <InputErrorContainer>{formik.errors.name}</InputErrorContainer>
                </>
              ) : null}
              {formik.touched.name && !formik.errors.name && <SuccessStatusIcon src={inputIconSuccess} />}
            </NameInputContainer>
          )}

          <EmailInputContainer>
            <EmailIcon
              $haserror={formik.touched.email && formik.errors.email}
              $correct={formik.touched.email && !formik.errors.email && formik.values.email !== ''}
            />
            <EmailInput
              $haserror={formik.touched.email && formik.errors.email}
              $correct={formik.touched.email && !formik.errors.email && formik.values.email !== ''}
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <>
                <SuccessStatusIcon src={inputIconError} />
                <InputErrorContainer>{formik.errors.email}</InputErrorContainer>
              </>
            ) : null}
            {formik.touched.email && !formik.errors.email && <SuccessStatusIcon src={inputIconSuccess} />}
          </EmailInputContainer>
          <PasswordInputContainer>
            <PasswordIcon
              $haserror={formik.touched.password && formik.errors.password}
              $correct={formik.touched.password && !formik.errors.password && formik.values.password !== ''}
            />
            <PasswordInput
              $haserror={formik.touched.password && formik.errors.password}
              $correct={formik.touched.password && !formik.errors.password && formik.values.password !== ''}
              $tooshort={formik.values.password}
              $path={pathname}
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <>
                <SuccessStatusIcon src={inputIconError} />
                <InputErrorContainer>{formik.errors.password}</InputErrorContainer>
              </>
            ) : null}
            {formik.values.password.length > 0 && formik.values.password.length < 6 && isRegisterPage && (
              <InputWarningContainer>Your password is little secure</InputWarningContainer>
            )}
            {formik.touched.password && !formik.errors.password && <SuccessStatusIcon src={inputIconSuccess} />}
          </PasswordInputContainer>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
          <SubmitButton type="submit">{isRegisterPage ? 'Sign up' : 'Sign In'}</SubmitButton>
        </Form>
      </Container>
      <Link onClick={handleNavigate}>{isRegisterPage ? 'Sign In' : 'Registration'}</Link>
    </FormContainer>
  );
};
