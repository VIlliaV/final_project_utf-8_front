import { styled } from 'styled-components';
import { media } from '../../utils/media';
import noResultsImgMobile from '../../img/noResultsImg-mobile.webp';
import noResultsImgTablet from '../../img/noResultsImg-tablet.webp';

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 28px;

  margin-bottom: 40px;

  @media ${media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 14px;
  }
`;

export const NoResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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

// export const PaginationWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 51px;
//   width: 275px;
//   margin: 0 auto;
//   /* padding: 16px 28px; */
//   border-radius: 26px;
//   background-color: var(--back_theme_1);
//   box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
// `;
