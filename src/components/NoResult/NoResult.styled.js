import { styled } from 'styled-components';
import { media } from '../../utils/media';
import noResultsImgMobile from '../../img/noResultsImg-mobile.webp';
import noResultsImgTablet from '../../img/noResultsImg-tablet.webp';

export const NoResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  p {
    color: var(--select_text_1);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.28px;
    opacity: 0.5;
  }

  @media ${media.tablet} {
    padding-bottom: 0;

    p {
      font-size: 24px;
      letter-spacing: -0.48px;
    }
  }
`;

export const NoResultImg = styled.div`
  background-image: url(${noResultsImgMobile});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  width: 208px;
  height: 133px;
  margin-bottom: 24px;

  @media ${media.tablet} {
    background-image: url(${noResultsImgTablet});
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
