import { Container, Icon, Title, TextBlock } from './WellcomPage.styled';
import icon from './images/icon.svg';
import {AuthNav} from 'components/Auth/AuthNav/AuthNav';

function WellcomPage() {
  return (
    <Container>
      <Icon src={icon} />
      <Title>Welcome to the app!</Title>
      <TextBlock>
        This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save
        and retrieve your own recipes at any time.
      </TextBlock>
      <AuthNav/>
    </Container>
  );
}

export default WellcomPage;
