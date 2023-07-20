import { styled } from 'styled-components';
import { media } from '../../utils/media';
import searchImg from '../../img/search-icon.png';
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

export const SearchWrapper = styled.div`
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

export const SearchImg = styled.div`
  background-image: url(${searchImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  width: 208px;
  height: 133px;
  margin-bottom: 24px;

  @media ${media.tablet} {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
