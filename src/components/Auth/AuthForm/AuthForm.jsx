import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
// import * as Yup from 'yup';



import {
  Container,
  Header,
  Form,
  SubmitButton,
  Link,
  FormContainer,
  InputContainer,
  InputErrorContainer,
  NameInput,
  EmailInput,
  PasswordInput,
  NameIcon,
  EmailIcon,
  PasswordIcon,
  SuccessStatusIcon,
} from './AuthForm.styled';
import { loginUser, signupUser } from 'redux/auth/authOperations';
import inputIconSuccess from 'img/inputIconSuccess.svg';
import inputIconError from 'img/inputIconError.svg';

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

  const onSubmit = ({ name, email, password }) => {
    if (!isRegisterPage) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(signupUser({ name, email, password }));
  };

  const validate = values => {
    const errors = {};

    if (isRegisterPage) {
      if (!values.name) errors.name = 'Required';
    }

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

  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Reruired'),
  //   email: Yup.string()
  //     .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, 'Invalid email address')
  //     .required('Reruired'),
  //   password: Yup.string().min(6, 'The password should be at least 6 symbols').required('Reruired'),
  // });

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
            <InputContainer>
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
            </InputContainer>
          )}

          <InputContainer>
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
          </InputContainer>
          <InputContainer>
            <PasswordIcon
              $haserror={formik.touched.password && formik.errors.password}
              $correct={formik.touched.password && !formik.errors.password && formik.values.password !== ''}
            />
            <PasswordInput
              $haserror={formik.touched.password && formik.errors.password}
              $correct={formik.touched.password && !formik.errors.password && formik.values.password !== ''}
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
            {formik.touched.password && !formik.errors.password && <SuccessStatusIcon src={inputIconSuccess} />}
          </InputContainer>
          <SubmitButton type="submit">{isRegisterPage ? 'Sign up' : 'Sign In'}</SubmitButton>
        </Form>
      </Container>
      <Link onClick={handleNavigate}>{isRegisterPage ? 'Sign In' : 'Registration'}</Link>
    </FormContainer>
  );
};
