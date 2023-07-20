import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from 'utils/media';
import { ReactComponent as MenuIconSvg } from './img/menu.svg';
import { ReactComponent as CloseIconSVG } from './img/x.svg';

import burgurMob from './img/kisspng-mobile.png';
import burgurTab from './img/kisspng-tablet.png';
import burgurMob2 from './img/kisspng@2x.png';
import burgurTab2 from './img/kisspng-tablet@2x.png';

export const BurgerMenuContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const BurgerIcon = styled.div`
  display: flex;
  font-size: 24px;
  cursor: pointer;
  stroke: white;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: none;

  &.visible {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  background-color: var(--back_second_2);
  background-image: url(${burgurMob});
  background-position: top 0px left 0px;
  background-repeat: no-repeat;
  background-size: 360px auto;

  @media ${media.mobile + media.retina} {
    background-image: url(${burgurMob2});
    background-position: right 10px bottom -10px;
    background-repeat: no-repeat;
    background-size: 360px auto;
  }

  @media ${media.tablet} {
    background-image: url(${burgurTab});
    background-position: right 0px bottom 0px;
    background-repeat: no-repeat;
    background-size: 558px auto;
  }

  @media ${media.tablet + media.retina} {
    background-image: url(${burgurTab2});
    background-position: right 0px bottom 0px;
    background-repeat: no-repeat;
    background-size: 558px auto;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;

  @media ${media.tablet} {
    top: 32px;
    right: 32px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px;
  color: var(--text_third);
  text-decoration: none;
  transition: background-color 0.3s;
  margin-bottom: 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.36px;

  &.active {
    color: #8baa36;
    font-weight: bold;
  }

  @media ${media.tablet} {
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;

export const Switcher = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 18px;
  cursor: pointer;
  @media ${media.tablet} {
    bottom: 32px;
    left: 48px;
  }
`;

export const StyledMenuIconSvg = styled(MenuIconSvg)`
  stroke: var(--text_third);
  width: 28px;
  height: 28px;
  @media ${media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const StyledCloseIconSVG = styled(CloseIconSVG)`
  stroke: var(--text_theme_1);
  width: 32px;
`;
