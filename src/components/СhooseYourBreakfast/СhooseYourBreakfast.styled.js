import styled from 'styled-components';
import { media } from '../../utils/media';
import arrow from './images/arrow-narrow-right.svg';

export const СhooseBreakfastContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 435px;
  right: 34px;
  padding: 8px;
  width: 225px;
  height: 92px;
  border-radius: 8px;
  background: var(--back_third);

  span {
    color: var(--fix_back);
  }

  @media ${media.tablet} {
    top: 372px;
    right: 33px;
    padding: 12px;
    width: 260px;
    height: 100px;
  }

  @media ${media.desktop} {
    top: 462px;
    right: 122px;
    padding: 16px;
    width: 298px;
    height: 114px;
  }
`;

export const СhooseBreakfastText = styled.p`
  width: 100%;
  margin-bottom: 7px;
  color: var(--text_second_theme_1);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media ${media.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }

  @media ${media.desktop} {
    line-height: 1.43;
  }
`;

export const СhooseBreakfastButton = styled.button`
  position: absolute;
  right: 8px;
  width: 82px;
  height: 18px;
  background-color: var(--fix-transparent);
  border: none;
  color: var(--text_second_theme_1);
  text-align: left;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--fix_back);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${arrow});
    background-position: right 0px top 0px;
    background-repeat: no-repeat;
  }

  @media ${media.tablet} {
    right: 12px;
  }

  @media ${media.desktop} {
    right: 16px;
  }
`;
