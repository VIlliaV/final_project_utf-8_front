import HeadContainer from 'components/HeadContainer/HeadContainer';
import ErrorImg from 'img/404-tab.png';
import { Wrapper, TextWrapper } from './404Page.styled';

export default function Page404() {
  return (
    <HeadContainer>
      <Wrapper>
        <img src={ErrorImg} alt="error" />
        <TextWrapper>
          <div>We are sorry,</div>
          <p> but the page you were looking for can’t be found..</p>
        </TextWrapper>
      </Wrapper>
    </HeadContainer>
  );
}
