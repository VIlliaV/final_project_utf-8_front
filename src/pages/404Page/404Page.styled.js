import { styled } from 'styled-components';
import { media } from '../../utils/media';
import ErrorImageTab from 'img/404-tab.png';
import ErrorImageMobile from 'img/404-mobile.png';

export const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorImg = styled.div`
  background-image: url(${ErrorImageMobile});
  width: 259px;
  height: 170px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  margin: 0 auto 14px auto;

  @media ${media.tablet} {
    background-image: url(${ErrorImageTab});
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 205px;

  @media ${media.tablet} {
    width: 428px;
  }
  p {
    color: var(--select_text_1);
    font-size: 14px;
    line-height: 1.29;
    font-weight: 400;
    opacity: 0.5;

    @media ${media.tablet} {
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.36px;
    }
  }
  div {
    color: var(--select_text_1);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.36px;
    margin-bottom: 8px;

    @media ${media.tablet} {
      font-size: 24px;
      line-height: 1;
      letter-spacing: -0.48px;
      margin-bottom: 14 px;
    }
  }
`;
