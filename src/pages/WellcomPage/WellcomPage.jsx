import { Container, Icon, Title, TextBlock } from './WellcomPage.styled';
import icon from 'img/icon.svg';
import { AuthNav } from 'components/Auth/AuthNav/AuthNav';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { axiosInstance } from 'redux/auth/authOperations';

function WellcomPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect( () => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const verificationCode = searchParams.get('verificationCode');

    const verifyEmailCode = async verificationCode => {
      try {
        const response = await axiosInstance.get(`users/verify/${verificationCode}`);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('accessToken', response.accessToken);
        dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error.message);
      }
    };

    if (verificationCode) {
      verifyEmailCode(verificationCode);
    }

    if (accessToken && refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, searchParams]);

  return (
    <Container>
      <Icon src={icon} />
      <Title>Welcome to the app!</Title>
      <TextBlock>
        This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.
        You can easily save and retrieve your own recipes at any time.
      </TextBlock>
      <AuthNav />
    </Container>
  );
}

export default WellcomPage;
