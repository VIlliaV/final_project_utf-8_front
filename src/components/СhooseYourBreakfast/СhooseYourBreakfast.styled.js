import styled from 'styled-components';
import { media } from '../../utils/media';

export const СhooseBreakfastContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 435px;
  padding: 8px;
  border-radius: 8px;
  background: var(--back_third);

  @media ${media.mini} {
    max-width: 225px;
    min-height: 92px;
    right: 4px;
  }

  @media ${media.mobile} {
    width: 225px;
    height: 92px;
    right: 34px;
  }

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    stroke: var(--text_second_theme_1);
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    color: var(--fix_back);
    svg {
      stroke: var(--fix_back);
    }
  }

  @media ${media.tablet} {
    right: 12px;
  }

  @media ${media.desktop} {
    right: 16px;
  }
`;
