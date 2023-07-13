import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import {
  Container,
  Header,
  Form,
  Input,
  SubmitButton,
  Link,
  FormContainer,
  InputContainer,
  InputErrorContainer,
} from './AuthForm.styled';
import {
  loginUser, signupUser,
  // logoutUser
} from 'redux/auth/authOperations';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/signin') {
      setIsRegisterPage(false);
      setInitialValues(signInInitialValues);
    }
  }, [pathname]);

  
  

  const handleNavigate = useCallback(() => {
    isRegisterPage ? navigate('/signin') : navigate('/register');
  }, [navigate, isRegisterPage]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   if (pathname === '/signin') {
  //     dispatch(
  //       loginUser({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );
  //     return;
  //   }
  //   dispatch(
  //     signupUser({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  // };

  // const handleLogout = e => {
  //   e.preventDefault();
  //   dispatch(logoutUser());
  // };

  // let initialValues;

  // pathname === '/register' ? (initialValues = registerInitialValues) : (initialValues = signInInitialValues);

  
  const onSubmit = ({name, email, password}) => {
    // console.log('Formik values', values);
    // const form = e.currentTarget;
    if (!isRegisterPage) {
      dispatch(loginUser({ email, password}));
      return;
    }
    dispatch(signupUser({ name, email, password }));
  };

  const validate = values => {
    const errors = {};

    if (isRegisterPage) {if (!values.name) errors.name = 'Required'};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'The password should be at least 6 symbols';
    }

    return errors;
  };


  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


  return (
    <FormContainer isRegisterPage={isRegisterPage}>
      <Container>
        <Header>{isRegisterPage ? 'Registration' : 'Sign In'}</Header>
        <Form onSubmit={formik.handleSubmit}>
          {isRegisterPage && (
            <InputContainer>
              {' '}
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <InputErrorContainer>{formik.errors.name}</InputErrorContainer>
              ) : null}
            </InputContainer>
          )}

          <InputContainer>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <InputErrorContainer>{formik.errors.email}</InputErrorContainer>
            ) : null}
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <InputErrorContainer>{formik.errors.password}</InputErrorContainer>
            ) : null}
          </InputContainer>
          <SubmitButton type="submit">{isRegisterPage ? 'Sign up' : 'Sign In'}</SubmitButton>
        </Form>
        {/* <button style={{ marginTop: 30 }} type="button" onClick={handleLogout}>
          Logout
        </button> */}
      </Container>
      <Link onClick={handleNavigate}>{isRegisterPage ? 'Sign In' : 'Registration'}</Link>
    </FormContainer>
  );
};
