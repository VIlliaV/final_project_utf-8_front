import {
  Container, Icon, Title,
  // TextBlockContainer,
  TextBlock, AuthNavContainer
} from './WellcomPage.styled';
import icon from './images/icon.svg';

function WellcomPage() {
  return (
    <Container>
      <Icon src={icon} />
      <Title>Welcome to the app!</Title>
      {/* <TextBlockContainer> */}
        <TextBlock>
          This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save
          and retrieve your own recipes at any time.
        </TextBlock>
      {/* </TextBlockContainer> */}
      <AuthNavContainer></AuthNavContainer>
    </Container>
  );
}

export default WellcomPage;
