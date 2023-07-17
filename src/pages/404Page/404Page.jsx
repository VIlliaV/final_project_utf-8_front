import HeadContainer from 'components/HeadContainer/HeadContainer';

import { Wrapper, TextWrapper, ErrorImg } from './404Page.styled';

export default function Page404() {
  return (
    <HeadContainer>
      <Wrapper>
        <ErrorImg />
        <TextWrapper>
          <div>We are sorry,</div>
          <p> but the page you were looking for can’t be found..</p>
        </TextWrapper>
      </Wrapper>
    </HeadContainer>
  );
}
