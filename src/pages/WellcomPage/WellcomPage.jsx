import { Container, Icon, Title, TextBlock } from './WellcomPage.styled';
import icon from 'img/icon.svg';
import { AuthNav } from 'components/Auth/AuthNav/AuthNav';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

function WellcomPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

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
