import styled from 'styled-components';
import { media } from 'utils/media';

export const HeadText = styled.h1`
  position: relative;
  margin-top: 50px;
  color: var(--head_theme_1);
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.56px;
  @media ${media.tablet} {
    margin-top: 72px;
    font-size: 32px;
    letter-spacing: -0.64px;
  }
  @media ${media.desktop} {
    margin-top: 102px;
    font-size: 44px;
    line-height: 1.1;
    letter-spacing: -0.88px;
  }

  & .first-square {
    @media ${media.mini} {
      top: -26.83px;
      left: calc(100vw - 65%);
      width: 4px;
      height: 4px;
    }
    position: absolute;
    top: -26.83px;
    left: 104px;
    display: block;
    width: 8px;
    height: 8px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--active);
    @media ${media.tablet} {
      top: -32.4px;
      left: 187px;
      width: 14px;
      height: 14px;
    }
    @media ${media.desktop} {
      top: -29.4px;
      left: 228px;
    }
  }

  & .second-square {
    @media ${media.mini} {
      bottom: 7.5px;
      left: calc(100vw - 32%);
      width: 3px;
      height: 3px;
    }
    position: absolute;
    bottom: 7.5px;
    left: 231px;
    display: block;
    width: 6px;
    height: 6px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--back_theme_2);
    @media ${media.tablet} {
      bottom: -3px;
      left: 405px;
      width: 12px;
      height: 12px;
    }
    @media ${media.desktop} {
      bottom: 8px;
      left: 707px;
    }
  }
  & .third-square {
    @media ${media.mini} {
      bottom: 22.9px;
      left: calc(100vw - 15%);
      width: 4px;
      height: 4px;
    }
    position: absolute;
    bottom: 22.9px;
    left: 333px;
    display: block;
    width: 8px;
    height: 8px;
    transform: rotate(-25deg);
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--active);
    @media ${media.tablet} {
      bottom: 51.4px;
      left: 694px;
      width: 14px;
      height: 14px;
    }
    @media ${media.desktop} {
      bottom: 60.4px;
      left: 1150px;
    }
  }
`;
