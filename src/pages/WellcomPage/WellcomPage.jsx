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
  const verificationCode = searchParams.get('verificationCode');
  console.log(verificationCode);

  useEffect( () => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    
    if (accessToken && refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    const verifyEmailCode = async verificationCode => {
      try {
        const response = await axiosInstance.get(`users/verify/${verificationCode}`);
        console.log(response);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('accessToken', response.data.accessToken);
        dispatch(fetchCurrentUser());
      } catch (error) {
        console.log(error.message);
      }
    };

    if (verificationCode) {
      verifyEmailCode(verificationCode);
    }
  }, [dispatch, verificationCode]);

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
